import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BubbleMapComponent } from "./bubble/bubble-map.component";
import { LeafletComponent } from "./leaflet/leaflet.component";
import { MapsComponent } from "./maps.component";

const routes: Routes = [
  {
    path: "",
    component: MapsComponent,
    children: [
      {
        path: "leaflet",
        component: LeafletComponent,
      },
      {
        path: "bubble",
        component: BubbleMapComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsRoutingModule {}

export const routedComponents = [
  MapsComponent,
  LeafletComponent,
  BubbleMapComponent,
];
