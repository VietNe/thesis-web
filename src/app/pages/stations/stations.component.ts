import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LocalDataSource, ViewCell } from "ng2-smart-table";
import { SmartTableData } from "../../@core/data/smart-table";

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
      id: {
        title: "ID",
        type: "number",
      },
      stationName: {
        title: "Station Name",
        type: "string",
      },
      area: {
        title: "Area",
        type: "string",
      },
      status: {
        title: "Status",
        type: "custom",
        filter: false,
        renderComponent: StatusComponent,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData, private router: Router) {
    const data = this.service.getData();
    this.source.load(data);
  }

  ngOnInit(): void {}

  public onRowSelect(event: any): void {
    const { id } = event?.data;
    if (id) this.router.navigate(["pages", "stations", id]);
  }
}
