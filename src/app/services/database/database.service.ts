import { Injectable } from '@angular/core';
import {Bewirtschaftungseinheit} from '../../model/domain';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private STORAGE_KEY = 'ch.stoperosion.data.v1';

  constructor() {
    window.localStorage.removeItem('ch.stoperosion.data.v0');
  }

  public findAll(): Bewirtschaftungseinheit[] {
    const stored = window.localStorage.getItem(this.STORAGE_KEY);
    if (!stored) {
      return [];
    }
    console.warn('bewirtschaftungseinheiten', stored);
    return JSON.parse(stored).bewirtschaftungseinheiten;
  }

  public saveAll(bewirtschaftungseinheit: Bewirtschaftungseinheit[]) {
    const theData = {
      bewirtschaftungseinheiten : bewirtschaftungseinheit
    };
    window.localStorage.setItem(this.STORAGE_KEY, JSON.stringify(theData));
  }
}
