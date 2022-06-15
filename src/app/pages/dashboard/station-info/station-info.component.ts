import { Component, Input } from "@angular/core";
import { AQI_COLORS } from "../../../constants/colors";
@Component({
  selector: "ngx-station-info",
  styleUrls: ["./station-info.component.scss"],
  templateUrl: "./station-info.component.html",
})
export class WeatherComponent {
  @Input() station: Station;

  get aqi_color() {
    const e = AQI_COLORS.find(
      (e) =>
        this.station?.currentAQI > e.gt &&
        (e.lte ? this.station?.currentAQI <= e.lte : true)
    );
    if (e) return e.color;
    return "#FD0100";
  }
}
