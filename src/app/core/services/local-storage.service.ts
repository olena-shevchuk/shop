import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  setItem(key: string, value: object): void {

    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): object {

    return JSON.parse(localStorage.getItem(key));
  }

  removeItem(key: string): void {

    localStorage.removeItem(key);
  }
}
