import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SavedstarComponent } from './savedstar/savedstar.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"savestar", component:SavedstarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
