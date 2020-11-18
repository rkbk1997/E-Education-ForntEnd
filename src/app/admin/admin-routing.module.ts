import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AddnewsComponent } from './addnews/addnews.component';

const routes: Routes = [
  { path: 'admin/course', component: AddcourseComponent, canActivate: [AuthGuard] },
  { path: 'admin/news', component: AddnewsComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
