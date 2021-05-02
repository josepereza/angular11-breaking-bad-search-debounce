import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  {
    path:'', component:HomeComponent
  },
  {path:'busqueda', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
