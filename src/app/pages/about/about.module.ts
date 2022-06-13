import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NbCardModule, NbButtonModule } from "@nebular/theme";
import { ThemeModule } from "../../@theme/theme.module";
import { AboutComponent } from "./about.component";
const routes: Routes = [
  {
    path: "",
    component: AboutComponent,
  },
];

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ThemeModule,
    NbCardModule,
    NbButtonModule,
  ],
})
export class AboutModule {}
