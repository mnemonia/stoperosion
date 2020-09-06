import { Injectable } from '@angular/core';
import {Kultur} from '../../model/domain';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KulturService {
  private kulturen = [];

  constructor() {
    let kultur = new Kultur('mais', 'Mais (Silomais)', 1.0);
    this.kulturen.push(kultur);
    kultur = new Kultur('zuckerrueben', 'Zuckerrüben', 0.5);
    this.kulturen.push(kultur);
    kultur = new Kultur('winterweizen', 'Winterweizen', 0.1);
    this.kulturen.push(kultur);
    kultur = new Kultur('scharwbrachehw', 'Schwarzbrache im Herbst und Winter', 0.9);
    this.kulturen.push(kultur);
    kultur = new Kultur('keine', 'Keine', 1.0);
    this.kulturen.push(kultur);
  }

  public findAll(): Observable<Kultur[]> {
    return of(this.kulturen);
  }

}
