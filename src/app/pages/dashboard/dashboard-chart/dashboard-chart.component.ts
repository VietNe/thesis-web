import { Component, Input, OnDestroy } from "@angular/core";
import { NbThemeService } from "@nebular/theme";

import {
  Electricity,
  ElectricityChart,
  ElectricityData,
} from "../../../@core/data/electricity";
import { takeWhile } from "rxjs/operators";
import { forkJoin } from "rxjs";

@Component({
  selector: "ngx-dashboard-chart",
  styleUrls: ["./dashboard-chart.component.scss"],
  templateUrl: "./dashboard-chart.component.html",
})
export class ElectricityComponent implements OnDestroy {
  @Input() station: Station;
  public stationData: StationData[] = [];
  public today: number = Date.now();
  private alive = true;

  listData: Electricity[];
  chartData: ElectricityChart[];

  type = "week";
  types = ["week", "month", "year"];

  currentTheme: string;
  themeSubscription: any;

  constructor(
    private electricityService: ElectricityData,
    private themeService: NbThemeService
  ) {
    this.themeService
      .getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe((theme) => {
        this.currentTheme = theme.name;
      });

    forkJoin(
      this.electricityService.getListData(),
      this.electricityService.getChartData()
    )
      .pipe(takeWhile(() => this.alive))
      .subscribe(
        ([listData, chartData]: [Electricity[], ElectricityChart[]]) => {
          this.listData = listData;
          this.chartData = chartData;
        }
      );
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
