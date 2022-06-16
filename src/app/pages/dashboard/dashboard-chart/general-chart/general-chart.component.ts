import { Component, Input, OnDestroy } from "@angular/core";
import { takeWhile } from "rxjs/operators";
import { LayoutService } from "../../../../@core/utils";

var schema = [
  { name: "date", index: 0, text: "Date" },
  { name: "AQIindex", index: 1, text: "AQI Index" },
  { name: "PM10", index: 4, text: "PM1.0" },
  { name: "PM25", index: 2, text: "PM2.5" },
  { name: "PM100", index: 3, text: "PM10" },
  { name: "TEMP", index: 5, text: "TEMP" },
  { name: "HUM", index: 6, text: "HUM" },
  { name: "PRES", index: 6, text: "PRES" },
];

var itemStyle = {
  backgroundColor: "red",
  opacity: 0.8,
  shadowBlur: 10,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: "rgba(0, 0, 0, 0.5)",
};

@Component({
  selector: "ngx-general-chart",
  styleUrls: ["./general-chart.component.scss"],
  template: `
    <div
      echarts
      [options]="option"
      [merge]="option"
      class="echart"
      theme="dark"
      (chartInit)="onChartInit($event)"
    ></div>
  `,
})
export class GeneralChartComponent implements OnDestroy {
  private alive = true;

  @Input() data: StationData[];

  option: any;
  echartsIntance: any;

  constructor(private layoutService: LayoutService) {
    this.layoutService
      .onSafeChangeLayoutSize()
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => this.resizeChart());
  }

  ngOnChanges(): void {
    if (this.data) {
      this.option = {
        backgroundColor: "#323259",
        title: {
          text: "AQI",
          left: "1%",
        },
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: "5%",
          right: "15%",
          bottom: "10%",
        },
        xAxis: {
          data: this.data.map(function (item) {
            return new Date(item.createdAt).toLocaleString();
          }),
        },
        yAxis: {},
        dataZoom: [
          {
            startValue: new Date(this.data[0].createdAt).toLocaleString(),
          },
          {
            type: "inside",
          },
        ],
        visualMap: {
          top: 50,
          right: 10,
          pieces: [
            {
              gt: 0,
              lte: 50,
              color: "#93CE07",
            },
            {
              gt: 50,
              lte: 100,
              color: "#FBDB0F",
            },
            {
              gt: 100,
              lte: 150,
              color: "#FC7D02",
            },
            {
              gt: 150,
              lte: 200,
              color: "#FD0100",
            },
            {
              gt: 200,
              lte: 300,
              color: "#AA069F",
            },
            {
              gt: 300,
              color: "#AC3B2A",
            },
          ],
          outOfRange: {
            color: "#999",
          },
        },
        series: {
          name: "AQI",
          type: "line",
          data: this.data.map(function (item) {
            return item.AQI;
          }),
          markLine: {
            silent: true,
            lineStyle: {
              color: "#333",
            },
            data: [
              {
                yAxis: 50,
              },
              {
                yAxis: 100,
              },
              {
                yAxis: 150,
              },
              {
                yAxis: 200,
              },
              {
                yAxis: 300,
              },
            ],
          },
        },
      };
    }
  }

  onChartInit(echarts) {
    this.echartsIntance = echarts;
  }

  resizeChart() {
    if (this.echartsIntance) {
      this.echartsIntance.resize();
    }
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
