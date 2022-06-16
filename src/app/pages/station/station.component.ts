import { DatePipe } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ViewCell, LocalDataSource } from "ng2-smart-table";
import { StationService } from "../../services/station.service";
import * as html2pdf from "html2pdf.js";
import { AQI_COLORS } from "../../constants/colors";
@Component({
  template: `
    <div class="badge" [style.backgroundColor]="aqiColor">
      {{ value }}
    </div>
  `,
})
class AQIComponent implements ViewCell, OnInit {
  status: boolean;

  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit() {
    this.status = this.rowData?.status;
  }

  get aqiColor() {
    const e = AQI_COLORS.find((e) =>
      this.value > e.gt && e.lte ? this.value <= e.lte : true
    );
    if (e) return e.color;
    return "#FD0100";
  }
}
@Component({
  template: `
    <div>
      {{ date }}
    </div>
  `,
})
class CreatedAtComponent implements ViewCell, OnInit {
  public date: string;
  @Input() value: string | number;
  @Input() rowData: any;

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    this.date = this.datePipe.transform(this.value);
  }
}
@Component({
  template: `
    <div>
      <div class="badge" [style.backgroundColor]="aqiColor">
        {{ val }}
      </div>
    </div>
  `,
})
class PredictNextHourComponent implements ViewCell, OnInit {
  public val: number;
  @Input() value: string | number;
  @Input() rowData: any;

  constructor() {}

  ngOnInit() {
    this.val = this.rowData?.predictNextHour?.value;
  }

  get aqiColor() {
    const e = AQI_COLORS.find((e) =>
      this.val > e.gt && e.lte ? this.val <= e.lte : true
    );
    if (e) return e.color;
    return "#FD0100";
  }
}

@Component({
  selector: "ngx-station",
  templateUrl: "./station.component.html",
  styleUrls: ["./station.component.scss"],
})
export class StationComponent implements OnInit {
  public station: Station;

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    pager: {
      perPage: 6,
    },
    filter: false,
    hideSubHeader: true,
    columns: {
      AQI: {
        title: "AQI",
        type: "custom",
        renderComponent: AQIComponent,
      },
      O2: {
        title: "O2 (ppm)",
        type: "number",
      },
      Pre: {
        filter: false,
        title: "PRES (pa)",
        type: "number",
      },
      Temp: {
        filter: false,
        title: "TEM (°C)",
        type: "number",
      },
      Hum: {
        filter: false,
        title: "HUM (%)",
        type: "number",
      },

      PM10: {
        filter: false,
        title: "PM1.0 (µm)",
        type: "number",
      },
      PM25: {
        filter: false,
        title: "PM2.5 (µm)",
        type: "custom",
        renderComponent: AQIComponent,
      },
      predictNextHour: {
        filter: false,
        title: "PM2.5 Next Hour (µm)",
        type: "custom",
        renderComponent: PredictNextHourComponent,
      },
      PM100: {
        filter: false,
        title: "PM10 (µm)",
        type: "number",
      },
      createdAt: {
        filter: false,
        title: "Created At",
        type: "custom",
        renderComponent: CreatedAtComponent,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  dailyData = [];
  dailyDate = "";
  constructor(
    private stationService: StationService,
    private route: ActivatedRoute
  ) {
    const { id } = this.route.snapshot.params;
    if (id) {
      this.stationService.getStationById(id).subscribe((res) => {
        this.station = res.data;
        this.station.data = this.station.data.sort((a, b) =>
          new Date(b.createdAt) > new Date(a.createdAt) ? 1 : -1
        );
        if (this.station.data.length > 0) {
          this.dailyDate = this.station.data[0].createdAt;
          this.dailyData = this.station.data.filter((elm) => {
            return (
              new Date(elm.createdAt).getDate() ===
              new Date(this.dailyDate).getDate()
            );
          });
        }
        this.source.load(this.station.data);
      });
    } else {
      this.stationService.getStationByNameDevice().subscribe((res) => {
        this.station = res.data;
        this.station.data = this.station.data.sort((a, b) =>
          new Date(b.createdAt) > new Date(a.createdAt) ? 1 : -1
        );

        if (this.station.data.length > 0) {
          this.dailyDate = this.station.data[0].createdAt;
          this.dailyData = this.station.data.filter((elm) => {
            return (
              new Date(elm.createdAt).getDate() ===
              new Date(this.dailyDate).getDate()
            );
          });
        }
        this.source.load(this.station.data);
      });
    }
  }

  public aqiColor(aqi) {
    const e = AQI_COLORS.find((e) =>
      aqi > e.gt && e.lte ? aqi <= e.lte : true
    );
    if (e) return e.color;
    return "#FD0100";
  }

  ngOnInit(): void {}

  public exportDailyPDF(): void {
    var element = document.getElementById("daily-report");
    const time = new Date(Date.now()).toDateString();
    html2pdf(element, {
      filename: `Daily report ${time}.pdf`,
    });
  }

  public exportGeneralPDF(): void {
    const time = new Date(Date.now()).toDateString();
    var element = document.getElementById("general-report");
    html2pdf(element, {
      filename: `General report ${time}.pdf`,
    });
  }
}
