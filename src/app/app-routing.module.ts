import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from "./layouts/layout/layout.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "schedule",
    pathMatch: "full"
  },
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "home",
        loadChildren: () => import("./pages/home/home.module").then(x => x.HomeModule)
      },
      {
        path: "schedule",
        loadChildren: () => import("./pages/schedule/schedule.module").then(x => x.ScheduleModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true,
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
