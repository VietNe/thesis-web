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
  selector: "ngx-electricity-chart",
  styleUrls: ["./electricity-chart.component.scss"],
  template: `
    <div
      echarts
      [options]="option"
      [merge]="option"
      class="echart"
      (chartInit)="onChartInit($event)"
    ></div>
  `,
})
export class ElectricityChartComponent implements OnDestroy {
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
        color: ["#dd4444"],
        grid: {
          left: "10%",
          right: 150,
          top: "18%",
          bottom: "10%",
        },
        tooltip: {
          padding: 10,
          backgroundColor: "#222",
          borderColor: "#777",
          borderWidth: 1,
          formatter: function (obj) {
            var value = obj.value;
            return (
              '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
              "<span>Hour: </span>" +
              value[0] +
              "</div>" +
              schema[1].text +
              "：" +
              value[1] +
              "<br>" +
              schema[2].text +
              "：" +
              value[2] +
              "µm<br>" +
              schema[3].text +
              "：" +
              value[3] +
              "µm<br>" +
              schema[4].text +
              "：" +
              value[4] +
              "µm<br>" +
              schema[5].text +
              "：" +
              value[5] +
              "&deg<br>" +
              schema[6].text +
              "：" +
              value[6] +
              "%<br>" +
              schema[7].text +
              "：" +
              value[7] +
              "pa<br>"
            );
          },
        },
        xAxis: {
          type: "value",
          name: "Hour",
          nameGap: 16,
          nameTextStyle: {
            color: "#fff",
            fontSize: 14,
          },
          max: 24,
          splitLine: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "#eee",
            },
          },
        },
        yAxis: {
          type: "value",
          name: "AQI Index",
          nameLocation: "end",
          nameGap: 20,
          nameTextStyle: {
            color: "#fff",
            fontSize: 16,
            fontWeight: "bold",
          },
          axisLine: {
            lineStyle: {
              color: "#eee",
            },
          },
          splitLine: {
            show: false,
          },
        },
        visualMap: [
          {
            left: "right",
            top: "10%",
            dimension: 2,
            min: 0,
            max: 250,
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ["Size"],
            textGap: 30,
            textStyle: {
              color: "#fff",
              fontWeight: "bold",
            },
            inRange: {
              symbolSize: [10, 70],
            },
            outOfRange: {
              symbolSize: [10, 70],
              color: ["rgba(255,255,255,.2)"],
            },
            controller: {
              inRange: {
                color: ["#c23531"],
              },
              outOfRange: {
                color: ["#444"],
              },
            },
          },
          {
            left: "right",
            bottom: "5%",
            dimension: 6,
            min: 0,
            max: 50,
            itemHeight: 120,

            precision: 0.1,
            text: [""],
            textGap: 30,
            textStyle: {
              color: "#fff",
            },
            inRange: {
              colorLightness: [1, 0.5],
            },
            outOfRange: {
              color: ["rgba(255,255,255,.2)"],
            },
            controller: {
              inRange: {
                color: ["#c23531"],
              },
              outOfRange: {
                color: ["#444"],
              },
            },
          },
        ],
        series: [
          {
            name: "Station Info",
            type: "scatter",
            itemStyle: itemStyle,
            data:
              this.data?.map((e) => {
                return [
                  new Date(e.createdAt).getHours(),
                  e.AQI,
                  e.PM10,
                  e.PM25,
                  e.PM100,
                  e.Temp,
                  e.Hum,
                  e.Pre,
                ];
              }) || [],
          },
        ],
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
