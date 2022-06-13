import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LocalDataSource, ViewCell } from "ng2-smart-table";
import { StationService } from "../../services/station.service";
import { UserService } from "../../services/user.service";

@Component({
  template: `
    <div
      class="badge"
      [class]="value === 'admin' ? 'badge-success' : 'badge-info'"
    >
      {{ value === "admin" ? "Admin" : "User" }}
    </div>
  `,
})
class RoleComponent implements ViewCell, OnInit {
  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit() {}
}
@Component({
  selector: "ngx-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    add: {
      addButtonContent: "New",
      inputClass: "ccustom",
    },
    pager: {
      perPage: 6,
    },
    columns: {
      name: {
        title: "Name",
        type: "string",
      },
      email: {
        title: "Email",
        type: "string",
      },
      area: {
        title: "Area",
        type: "string",
      },
      role: {
        title: "Role",
        type: "custom",
        renderComponent: RoleComponent,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  private users: User[];
  constructor(private userService: UserService, private router: Router) {
    this.userService.getAllUsers().subscribe((res) => {
      this.users = res.data;
      this.source.load(this.users);
    });
  }

  ngOnInit(): void {}
}
