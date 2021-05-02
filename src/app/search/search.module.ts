import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    NavbarComponent,
    BusquedaComponent,
    ListadoComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MaterialModule,
  ]
})
export class SearchModule { }
