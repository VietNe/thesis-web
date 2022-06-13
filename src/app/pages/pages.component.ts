import { Component } from "@angular/core";

import { ADMIN_MENU_ITEMS, USER_MENU_ITEMS } from "./pages-menu";

@Component({
  selector: "ngx-pages",
  styleUrls: ["pages.component.scss"],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {
  public menu = [];
  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user.role === "admin") {
      this.menu = ADMIN_MENU_ITEMS;
    } else {
      this.menu = USER_MENU_ITEMS;
    }
  }
}
