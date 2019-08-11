import { Component, OnInit, OnDestroy, Inject, Optional } from '@angular/core';

import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ConfigOptionsService } from 'src/app/core/services/config-options.service';
import { ConstantService } from 'src/app/core/services/constant.service';
import { Generator, GeneratorFactoryService } from 'src/app/core/services/generator.factory';
import { GeneratorService } from 'src/app/core/services/generator.service';

const user = {
  firstName: 'Olena',
  secondName: 'Shevchuk',
  logonTime: Date.now()
};

const config = {
  id: 1,
  login: 'userlogin'
};

const application = {
  app: 'TaskManager',
  ver: '1.0'
};

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [
    {
      provide: LocalStorageService, useClass: LocalStorageService
    },
    {
      provide: ConstantService, useValue: application
    },
    {
      provide: Generator, useFactory: GeneratorFactoryService(5), deps: [GeneratorService]
    }
  ]
})
export class AboutComponent implements OnInit, OnDestroy {

  login: string;
  app: string;
  version: string;

  constructor(
    @Inject(Generator) private sequence: any[],
    @Optional() private localStorageSvc: LocalStorageService,
    private configSvc: ConfigOptionsService,
    private constSvc: ConstantService) { }

  ngOnInit() {

    if (this.localStorageSvc) {

      this.localStorageSvc.setItem('currentUser', user);

      console.log('Local Storage contains the next object:');
      console.log(this.localStorageSvc.getItem('currentUser'));

    } else {
      console.log('No Service Found');
    }

    this.configSvc.setConfig(config);
    this.login = this.configSvc.getConfig()['login'];

    this.app = this.constSvc['app'];
    this.version = this.constSvc['ver'];

    console.log(`Generated sequence is ${this.sequence}`);
  }

  ngOnDestroy() {

    if (this.localStorageSvc) {

      this.localStorageSvc.removeItem('currentUser');
    }
  }
}
