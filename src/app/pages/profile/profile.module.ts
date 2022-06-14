import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import {
  NbCardModule,
  NbTreeGridModule,
  NbIconModule,
  NbInputModule,
  NbButtonModule,
} from "@nebular/theme";
import { ThemeModule } from "../../@theme/theme.module";
import { ProfileComponent } from "./profile.component";

const routes: Routes = [
  {
    path: "",
    component: ProfileComponent,
  },
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    ThemeModule,
  ],
})
export class ProfileModule {}
