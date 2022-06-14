import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "ngx-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"],
})
export class UserFormComponent implements OnInit {
  @Input() isUpdate = false;

  constructor() {}

  ngOnInit(): void {}
}
