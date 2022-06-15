import { Component, Input } from "@angular/core";

@Component({
  selector: "ngx-station-info",
  styleUrls: ["./station-info.component.scss"],
  templateUrl: "./station-info.component.html",
})
export class WeatherComponent {
  @Input() station: Station;
}
