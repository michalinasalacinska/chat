import { Injectable } from '@angular/core';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { 
    Parse.initialize(
      '',
      ''
    );

    (<any>Parse).serverURL = 'https://parseapi.back4app.com/';
  }
}
