import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackgroundColorDirective } from './directives/background-color.directive';

@NgModule({
  declarations: [
    BackgroundColorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackgroundColorDirective
  ]
})
export class SharedModule { }