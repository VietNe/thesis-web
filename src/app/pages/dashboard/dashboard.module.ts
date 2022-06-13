import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import {
  NbActionsModule,
  NbBadgeModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbListModule,
  NbProgressBarModule,
  NbRadioModule,
  NbSelectModule,
  NbTabsetModule,
  NbUserModule,
} from "@nebular/theme";
import { NgxEchartsModule } from "ngx-echarts";
import { ThemeModule } from "../../@theme/theme.module";
import { DashboardComponent } from "./dashboard.component";
import { ElectricityChartComponent } from "./electricity/electricity-chart/electricity-chart.component";
import { ElectricityComponent } from "./electricity/electricity.component";
import { WeatherComponent } from "./weather/weather.component";

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
    NbProgressBarModule,
    NbBadgeModule,
    LeafletModule,
  ],
  declarations: [
    DashboardComponent,
    ElectricityComponent,
    ElectricityChartComponent,
    WeatherComponent,
  ],
  providers: [],
})
export class DashboardModule {}
