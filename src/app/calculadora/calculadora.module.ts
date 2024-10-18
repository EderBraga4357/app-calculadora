import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualComponent } from './visual/visual.component';



@NgModule({
  declarations: [
    VisualComponent
  ],
  exports: [
    VisualComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CalculadoraModule { }
