import { Component, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { combineLatest } from "rxjs";
import { takeWhile } from "rxjs/operators";
import { NbThemeService } from "@nebular/theme";
import { registerMap } from "echarts";

@Component({
  selector: "ngx-bubble-map",
  styleUrls: ["./bubble-map.component.scss"],
  template: `
    <nb-card>
      <nb-card-header>Bubble Maps</nb-card-header>
      <div echarts [options]="options" class="echarts"></div>
    </nb-card>
  `,
})
export class BubbleMapComponent implements OnDestroy {
  latlong: any = {};
  mapData: any[];
  max = -Infinity;
  min = Infinity;
  options: any;

  bubbleTheme: any;
  geoColors: any[];

  private alive = true;

  constructor(private theme: NbThemeService, private http: HttpClient) {
    combineLatest([
      this.http.get("assets/map/word.geojson"),
      this.theme.getJsTheme(),
    ])
      .pipe(takeWhile(() => this.alive))
      .subscribe(([map, config]: [any, any]) => {
        registerMap("world", map);

        const colors = config.variables;
        this.bubbleTheme = config.variables.bubbleMap;
        this.geoColors = [
          colors.primary,
          colors.info,
          colors.success,
          colors.warning,
          colors.danger,
        ];

        this.mapData = [];

        this.mapData.forEach((itemOpt) => {
          if (itemOpt.value > this.max) {
            this.max = itemOpt.value;
          }
          if (itemOpt.value < this.min) {
            this.min = itemOpt.value;
          }
        });

        this.options = {
          title: {
            text: "World Population (2011)",
            left: "center",
            top: "16px",
            textStyle: {
              color: this.bubbleTheme.titleColor,
            },
          },
          tooltip: {
            trigger: "item",
            formatter: (params) => {
              return `${params.name}: ${params.value[2]}`;
            },
          },

          // load gmap component
          gmap: {
            // initial options of Google Map
            // See https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions for details
            // initial map center, accepts an array like [lng, lat] or an object like { lng, lat }
            center: [108.39, 39.9],
            // center: { lng: 108.39, lat: 39.9 },
            // initial map zoom
            zoom: 4,

            // whether echarts layer should be rendered when the map is moving. `true` by default.
            // if false, it will only be re-rendered after the map `moveend`.
            // It's better to set this option to false if data is large.
            renderOnMoving: true,
            // the zIndex of echarts layer for Google Map. `2000` by default.
            echartsLayerZIndex: 2019,
            // whether to enable gesture handling. `true` by default.
            // since v1.4.0
            roam: true,

            // More initial options...
          },
          series: [
            {
              type: "scatter",
              // use `gmap` as the coordinate system
              coordinateSystem: "gmap",
              // data items [[lng, lat, value], [lng, lat, value], ...]
              data: [
                [120, 30, 8],
                [120.1, 30.2, 20],
              ],
              encode: {
                // encode the third element of data item as the `value` dimension
                value: 2,
                lng: 0,
                lat: 1,
              },
            },
          ],
          // geo: {
          //   name: "World Population (2010)",
          //   type: "map",
          //   map: "world",
          //   // roam: true,
          //   // label: {
          //   //   emphasis: {
          //   //     show: false,
          //   //   },
          //   // },
          //   itemStyle: {
          //     normal: {
          //       areaColor: this.bubbleTheme.areaColor,
          //       borderColor: this.bubbleTheme.areaBorderColor,
          //     },
          //     emphasis: {
          //       areaColor: this.bubbleTheme.areaHoverColor,
          //     },
          //   },
          //   zoom: 1.1,
          // },
          // series: [
          //   {
          //     type: "scatter",
          //     coordinateSystem: "geo",
          //     data: this.mapData.map((itemOpt) => {
          //       return {
          //         name: itemOpt.name,
          //         value: [
          //           this.latlong[itemOpt.code].longitude,
          //           this.latlong[itemOpt.code].latitude,
          //           itemOpt.value,
          //         ],
          //         itemStyle: {
          //           normal: {
          //             color: itemOpt.color,
          //           },
          //         },
          //       };
          //     }),
          //   },
          //   {
          //     name: "Top 5",
          //     type: "effectScatter",
          //     coordinateSystem: "geo",
          //     data: this.mapData
          //       .map((itemOpt) => {
          //         return {
          //           name: itemOpt.name,
          //           value: [
          //             this.latlong[itemOpt.code].longitude,
          //             this.latlong[itemOpt.code].latitude,
          //             itemOpt.value,
          //           ],
          //           itemStyle: {
          //             normal: {
          //               color: itemOpt.color,
          //             },
          //           },
          //         };
          //       })
          //       .sort(function (a: any, b: any) {
          //         return a.value - b.value;
          //       })
          //       .slice(0, 6),
          //     symbolSize: function (val) {
          //       return val[2] / 10;
          //     },
          //     encode: {
          //       tooltip: 2,
          //     },
          //     showEffectOn: "render",
          //     rippleEffect: {
          //       brushType: "stroke",
          //     },
          //     label: {
          //       formatter: "{b}",
          //       position: "right",
          //       show: true,
          //     },
          //     itemStyle: {
          //       shadowBlur: 10,
          //       shadowColor: "#333",
          //     },
          //     emphasis: {
          //       scale: true,
          //     },
          //     zlevel: 1,
          //   },
          // ],
        };
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }

  private getRandomGeoColor() {
    const index = Math.round(Math.random() * this.geoColors.length);
    return this.geoColors[index];
  }
}
