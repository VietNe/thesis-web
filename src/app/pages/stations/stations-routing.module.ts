import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StationsComponent } from "./stations.component";

const routes: Routes = [
  {
    path: "",
    component: StationsComponent,
  },
  {
    path: ":id",
    loadChildren: () =>
      import("../station/station.module").then((m) => m.StationModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StationsRoutingModule {}
