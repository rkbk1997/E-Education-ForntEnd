import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:"" , component:HomeComponent },
  { path:"course" , component:CourseComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
