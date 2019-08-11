import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalStorageService } from './services/local-storage.service';
import { ConstantService } from './services/constant.service';
import { GeneratorService } from './services/generator.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    LocalStorageService,
    ConstantService,
    GeneratorService
  ]
})
export class CoreModule { }
