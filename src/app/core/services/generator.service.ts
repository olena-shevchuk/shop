import { Injectable } from '@angular/core';

const chars = 'ABCDEFGHIJKLMNOPRSTUVWXYZabcdefghijklmnoprstuvwxyz0123456789';

@Injectable()
export class GeneratorService {

  constructor() { }

  generate(n: number): string {

    let randomstring = '';

    for (let i = 0; i < n; i++) {
      randomstring += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return randomstring;
  }
}
