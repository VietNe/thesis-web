import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbLayoutModule,
} from "@nebular/theme";
import { ThemeModule } from "../../@theme/theme.module";
import { LoginComponent } from "./login.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbLayoutModule,
    ThemeModule,
  ],
})
export class LoginModule {}
