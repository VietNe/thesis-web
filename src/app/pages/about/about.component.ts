import { Component, OnInit } from "@angular/core";
import { NbMenuService } from "@nebular/theme";

@Component({
  selector: "ngx-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  constructor(private menuService: NbMenuService) {}

  goToHome() {
    this.menuService.navigateHome();
  }

  ngOnInit(): void {}
}
