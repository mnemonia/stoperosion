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
    kultur = new Kultur('zuckerrueben', 'Zuckerrüben', 1.0);
    this.kulturen.push(kultur);
    kultur = new Kultur('winterweizen', 'Winterweizen', 1.0);
    this.kulturen.push(kultur);
    kultur = new Kultur('scharwbrachehw', 'Scharbrache im Herbst und Winter', 1.0);
    this.kulturen.push(kultur);
    kultur = new Kultur('keine', 'Keine', 1.0);
    this.kulturen.push(kultur);
  }

  public findAll(): Observable<Kultur[]> {
    return of(this.kulturen);
  }

}
