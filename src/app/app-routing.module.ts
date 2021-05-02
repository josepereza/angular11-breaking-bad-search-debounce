import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro/intro.component';

const routes: Routes = [
  {
    path: 'intro', component: IntroComponent,
  },
 {
   path:'search', loadChildren:()=>import('../app/search/search.module').then(m=>m.SearchModule)
 }  ,
 {
   path:'**', redirectTo:'intro'
 }
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
