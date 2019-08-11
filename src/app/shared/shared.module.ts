import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackgroundColorDirective } from './directives/background-color.directive';
import { BorderDirective } from './directives/border.directive';

@NgModule({
  declarations: [
    BackgroundColorDirective,
    BorderDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackgroundColorDirective,
    BorderDirective
  ]
})
export class SharedModule { }
