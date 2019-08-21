import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackgroundColorDirective } from './directives/background-color.directive';
import { BorderDirective } from './directives/border.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [
    BackgroundColorDirective,
    BorderDirective,
    OrderByPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackgroundColorDirective,
    BorderDirective,
    OrderByPipe
  ]
})
export class SharedModule { }
