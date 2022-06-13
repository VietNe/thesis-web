import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbTreeGridModule,
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { ThemeModule } from "../../@theme/theme.module";
import { DashboardModule } from "../dashboard/dashboard.module";
import { StationRoutingModule } from "./station-routing.module";
import { StationComponent } from "./station.component";

@NgModule({
  declarations: [StationComponent],
  imports: [
    CommonModule,
    StationRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    DashboardModule,
  ],
})
export class StationModule {}
