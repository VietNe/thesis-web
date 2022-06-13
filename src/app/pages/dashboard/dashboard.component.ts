import { Component, OnDestroy } from "@angular/core";
import { NbThemeService } from "@nebular/theme";
import { takeWhile } from "rxjs/operators";
import { SolarData } from "../../@core/data/solar";
import { StationService } from "../../services/station.service";

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: "ngx-dashboard",
  styleUrls: ["./dashboard.component.scss"],
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnDestroy {
  public dashboardData: DashboardData;
  constructor(private stationService: StationService) {
    this.stationService.getDashboard().subscribe((res) => {
      this.dashboardData = res.data;
      this.dashboardData.station.data = this.dashboardData.station.data.sort(
        (a, b) => {
          return new Date(b.createdAt) > new Date(a.createdAt) ? 1 : -1;
        }
      );
      const today = this.dashboardData?.station?.data[0]?.createdAt;
      if (today) {
        this.dashboardData.station.data =
          this.dashboardData.station.data.filter((elm) => {
            return (
              new Date(elm.createdAt).getDate() === new Date(today).getDate()
            );
          });
      }
    });
  }

  ngOnDestroy() {}
}
