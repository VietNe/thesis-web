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
import { DailyChartComponent } from "./dashboard-chart/daily-chart/daily-chart.component";
import { ElectricityComponent } from "./dashboard-chart/dashboard-chart.component";
import { GeneralChartComponent } from "./dashboard-chart/general-chart/general-chart.component";
import { WeatherComponent } from "./station-info/station-info.component";

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
    DailyChartComponent,
    GeneralChartComponent,
    WeatherComponent,
  ],
  exports: [DailyChartComponent, GeneralChartComponent],
  providers: [],
})
export class DashboardModule {}
