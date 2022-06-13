import { DatePipe } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ViewCell, LocalDataSource } from "ng2-smart-table";
import { StationService } from "../../services/station.service";

@Component({
  template: `
    <div class="badge" [class]="status ? 'badge-success' : 'badge-danger'">
      {{ status ? "Active" : "Inactive" }}
    </div>
  `,
})
class StatusComponent implements ViewCell, OnInit {
  status: boolean;

  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit() {
    this.status = this.rowData?.status;
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
      {{ val }}
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
        type: "number",
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
        type: "number",
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
  constructor(
    private stationService: StationService,
    private route: ActivatedRoute
  ) {
    const { id } = this.route.snapshot.params;
    if (id) {
      this.stationService.getStationById(id).subscribe((res) => {
        this.station = res.data;
        this.source.load(this.station.data);
      });
    } else {
      this.stationService.getStationByNameDevice().subscribe((res) => {
        this.station = res.data;
        this.station.data = this.station.data.sort((a, b) =>
          new Date(b.createdAt) > new Date(a.createdAt) ? 1 : -1
        );
        this.source.load(this.station.data);
      });
    }
  }

  ngOnInit(): void {}
}
