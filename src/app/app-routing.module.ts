import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ForumsComponent } from './forums/forums.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'forums', component: ForumsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
