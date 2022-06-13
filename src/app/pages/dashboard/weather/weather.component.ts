import { Component, Input } from "@angular/core";

@Component({
  selector: "ngx-weather",
  styleUrls: ["./weather.component.scss"],
  templateUrl: "./weather.component.html",
})
export class WeatherComponent {
  @Input() station: Station;
}
