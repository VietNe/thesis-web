import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StationComponent } from "./station.component";
import { StationRoutingModule } from "./station-routing.module";
import {
  NbCardModule,
  NbTreeGridModule,
  NbIconModule,
  NbInputModule,
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { ThemeModule } from "../../@theme/theme.module";

@NgModule({
  declarations: [StationComponent],
  imports: [
    CommonModule,
    StationRoutingModule,
    CommonModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
  ],
})
export class StationModule {}
