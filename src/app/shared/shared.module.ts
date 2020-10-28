import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { ExpertComponent } from './expert/expert.component';



@NgModule({
  declarations: [SliderComponent, ExpertComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SliderComponent,
    ExpertComponent
  ]
})
export class SharedModule { }
