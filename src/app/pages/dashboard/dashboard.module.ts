import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbListModule,
  NbProgressBarModule,
  NbRadioModule,
  NbSelectModule,
  NbTabsetModule,
  NbUserModule,
  NbBadgeModule,
} from "@nebular/theme";
import { NgxEchartsModule } from "ngx-echarts";
import { ThemeModule } from "../../@theme/theme.module";
import { CountryOrdersChartComponent } from "./country-orders/chart/country-orders-chart.component";
import { CountryOrdersComponent } from "./country-orders/country-orders.component";
import { CountryOrdersMapComponent } from "./country-orders/map/country-orders-map.component";
import { CountryOrdersMapService } from "./country-orders/map/country-orders-map.service";
import { DashboardComponent } from "./dashboard.component";
import { ElectricityChartComponent } from "./electricity/electricity-chart/electricity-chart.component";
import { ElectricityComponent } from "./electricity/electricity.component";
import { ECommerceProgressSectionComponent } from "./progress-section/progress-section.component";
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
    CountryOrdersComponent,
    CountryOrdersMapComponent,
    CountryOrdersChartComponent,
    ECommerceProgressSectionComponent,
    ElectricityComponent,
    ElectricityChartComponent,
    WeatherComponent,
  ],
  providers: [CountryOrdersMapService],
})
export class DashboardModule {}
