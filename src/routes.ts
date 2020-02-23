import { Routes } from "@angular/router"
import { ActivityListComponent } from "./app/activity-list/activity-list.component"
import { MapComponent } from "./app/map/map.component"

export const appRoutes: Routes = [
  { path: "zone", component: ActivityListComponent },
  { path: "zone/:id", component: MapComponent },
  { path: "", redirectTo: "/zone", pathMatch: 'full' }
]