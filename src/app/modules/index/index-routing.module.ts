import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('../home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'about',
    loadChildren:()=>import('../about/about.module').then(m=>m.AboutModule)
  },
  {
    path:'events',
    loadChildren:()=>import('../events/events.module').then(m=>m.EventsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
