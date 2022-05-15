import { DatePipe } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { ViewCell, LocalDataSource } from "ng2-smart-table";

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
  selector: "ngx-station",
  templateUrl: "./station.component.html",
  styleUrls: ["./station.component.scss"],
})
export class StationComponent implements OnInit {
  public station: any = {
    id: 1,
    name: "Trạm Linh Trung",
    area: "Thủ Đức",
    status: true,
    stationData: [
      {
        o2: 1,
        pres: 1,
        temperature: 1,
        humidity: 1,
        pm25: 1,
        pm100: 1,
        createdAt: Date.now(),
      },
      {
        o2: 1,
        pres: 1,
        temperature: 1,
        humidity: 1,
        pm25: 1,
        pm100: 1,
        createdAt: Date.now(),
      },
      {
        o2: 1,
        pres: 1,
        temperature: 1,
        humidity: 1,
        pm25: 1,
        pm100: 1,
        createdAt: Date.now(),
      },
    ],
  };

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
      o2: {
        title: "O2 (ppm)",
        type: "number",
      },
      pres: {
        filter: false,
        title: "PRES (pa)",
        type: "number",
      },
      temperature: {
        filter: false,
        title: "TEM (%)",
        type: "number",
      },
      humidity: {
        filter: false,
        title: "HUM (%)",
        type: "number",
      },
      pm25: {
        filter: false,
        title: "PM2.5",
        type: "number",
      },
      pm100: {
        filter: false,
        title: "PM10",
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
  constructor() {
    const data = this.station.stationData;
    this.source.load(data);
  }

  ngOnInit(): void {}
}
