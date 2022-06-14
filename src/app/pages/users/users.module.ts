import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActionsComponent, UsersComponent } from "./users.component";
import { Routes, RouterModule } from "@angular/router";
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbTreeGridModule,
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { ThemeModule } from "../../@theme/theme.module";
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: "",
    component: UsersComponent,
  },
];

@NgModule({
  declarations: [UsersComponent, ActionsComponent, UserFormComponent],
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
    Ng2SmartTableModule,
  ],
})
export class UsersModule {}
