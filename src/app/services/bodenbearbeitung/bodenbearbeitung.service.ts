import { Injectable } from '@angular/core';
import {Bodenbearbeitung} from '../../model/domain';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BodenbearbeitungService {
  private bodenbearbeitung: Bodenbearbeitung[] = [];

  constructor() {
    let bb = new Bodenbearbeitung('mulch30', 'über 30% Mulch', 1.0);
    this.bodenbearbeitung.push(bb);
    bb = new Bodenbearbeitung('pflug', 'Pflug', 1.0);
    this.bodenbearbeitung.push(bb);
    bb = new Bodenbearbeitung('direksaat', 'Direksaat', 1.0);
    this.bodenbearbeitung.push(bb);
  }

  public findAll(): Observable<Bodenbearbeitung[]> {
    return of(this.bodenbearbeitung);
  }
}
