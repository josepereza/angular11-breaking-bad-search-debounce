import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class MaterialModule { }
