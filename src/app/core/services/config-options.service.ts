import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private configObj = {};
  private config = {
    id: null as number,
    login: null as string,
    email: null as string
  };

  constructor() { }

  setConfig(config: object): void {

    Object.keys(config).forEach(key => key in this.config ? this.configObj[key] = config[key] : null);
  }

  getConfig(): object {

    return this.configObj;
  }
}
