import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './modules/index/index-page/index-page.component';

const routes: Routes = [
  {
    path:'',
    component: IndexPageComponent,
    loadChildren:()=>import('./modules/index/index.module').then(m=>m.IndexModule)
  },
  {
    path:'home',
    component: IndexPageComponent,
    loadChildren:()=>import('./modules/index/index.module').then(m=>m.IndexModule)
  },
  {
    path:'**',
    pathMatch: 'full', redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
