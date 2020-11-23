import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './authentication/auth.service';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { HomeComponent } from './home/home.component';
import { HomeguardGuard } from './homeguard.guard';
import { NewsComponent } from './news/news.component';
import { ProfileComponent } from './profile/profile.component';
import { SupportsComponent } from './supports/supports.component';

const routes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'course' , component: CourseComponent},
  { path: 'news' , component: NewsComponent },
  { path: 'about' , component: AboutComponent },
  { path: 'support' , component: SupportsComponent },
  { path: 'contact' , component: ContactComponent },
  { path: 'profile' , component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'enrollment' , component: EnrollmentComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
