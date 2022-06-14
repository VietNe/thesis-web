import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NbDialogService } from "@nebular/theme";
import { LocalDataSource, ViewCell } from "ng2-smart-table";
import { UserService } from "../../services/user.service";
import { UserFormComponent } from "./user-form/user-form.component";

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
  template: `
    <button size="small" nbButton status="primary" (click)="editUser()">
      Edit
    </button>
  `,
})
export class ActionsComponent implements ViewCell, OnInit {
  @Input() value: string | number;
  @Input() rowData: any;

  constructor(private dialogService: NbDialogService) {}

  ngOnInit() {}

  editUser() {
    this.dialogService.open(UserFormComponent, {
      context: {
        isUpdate: true,
      },
    });
  }
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

    pager: {
      perPage: 6,
    },
    columns: {
      _id: {
        title: "Actions",
        type: "custom",
        renderComponent: ActionsComponent,
        filter: false,
        width: "70px",
      },
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
      NameDevice: {
        title: "Name Device",
        type: "string",
      },
      phone: {
        title: "Phone",
        type: "string",
      },
      address: {
        title: "Address",
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
  constructor(
    private userService: UserService,
    private router: Router,
    private dialogService: NbDialogService
  ) {
    this.userService.getAllUsers().subscribe((res) => {
      this.users = res.data;
      this.source.load(this.users);
    });
  }

  ngOnInit(): void {}

  createNewUser() {
    this.dialogService.open(UserFormComponent);
  }
}
