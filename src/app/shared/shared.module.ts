import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { ExpertComponent } from './expert/expert.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { NewsCardComponent } from './news-card/news-card.component';



@NgModule({
  declarations: [SliderComponent, ExpertComponent, CourseCardComponent, NewsCardComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SliderComponent,
    ExpertComponent,
    CourseCardComponent,
    NewsCardComponent
  ]
})
export class SharedModule { }
