import { Injectable } from '@angular/core';
import {Bodenbearbeitung} from '../../model/domain';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BodenbearbeitungService {
  private bodenbearbeitung: Bodenbearbeitung[] = [];

  constructor() {
    let bb = new Bodenbearbeitung('mulch30', 'über 30% Mulch', 0.108);
    this.bodenbearbeitung.push(bb);
    bb = new Bodenbearbeitung('pflug', 'Pflug', 0.389);
    this.bodenbearbeitung.push(bb);
    bb = new Bodenbearbeitung('direksaat', 'Direksaat', 0.039);
    this.bodenbearbeitung.push(bb);
    bb = new Bodenbearbeitung('keine', 'Keine', 1.0);
    this.bodenbearbeitung.push(bb);
  }

  public findAll(): Observable<Bodenbearbeitung[]> {
    return of(this.bodenbearbeitung);
  }
}
