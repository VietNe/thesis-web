import { Injectable } from "@angular/core";
import { of as observableOf, Observable } from "rxjs";
import { ProgressInfo, StatsProgressBarData } from "../data/stats-progress-bar";

@Injectable()
export class StatsProgressBarService extends StatsProgressBarData {
  private progressInfoData: ProgressInfo[] = [
    {
      title: "Areas",
      value: 2,
      activeProgress: (1 / 64) * 100,
      description: "Number of areas where monitoring stations are installed",
      target: 64,
    },
    {
      title: "Stations",
      value: 150,
      activeProgress: (150 / 2000) * 100,
      description: "Number of stations",
      target: 2000,
    },
  ];

  getProgressInfoData(): Observable<ProgressInfo[]> {
    return observableOf(this.progressInfoData);
  }
}
