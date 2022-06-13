import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LocalDataSource, ViewCell } from "ng2-smart-table";
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
  selector: "ngx-stations",
  templateUrl: "./stations.component.html",
  styleUrls: ["./stations.component.scss"],
})
export class StationsComponent implements OnInit {
  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    pager: {
      perPage: 6,
    },
    columns: {
      NameDevice: {
        title: "Station Name",
        type: "string",
      },
      area: {
        title: "Area",
        type: "string",
      },
      currentAQI: {
        title: "Current AQI",
        type: "number",
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  private stations: Station[];
  constructor(private stationService: StationService, private router: Router) {
    this.stationService.getAllStation().subscribe((res) => {
      this.stations = res.data;
      this.source.load(this.stations);
    });
  }

  ngOnInit(): void {}

  public onRowSelect(event: any): void {
    const { NameDevice } = event?.data;
    const station = this.stations.find((s) => s.NameDevice === NameDevice);
    if (station) this.router.navigate(["pages", "stations", station._id]);
  }
}
