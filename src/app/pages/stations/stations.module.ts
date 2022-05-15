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
import { StationsRoutingModule } from "./stations-routing.module";
import { StationsComponent } from "./stations.component";

@NgModule({
  declarations: [StationsComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    StationsRoutingModule,
  ],
})
export class StationsModule {}
