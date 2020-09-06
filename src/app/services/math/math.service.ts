import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Bewirtschaftungseinheit, Bodenbearbeitung, Kultur, Nutzungsflaeche} from '../../model/domain';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }

  public calculateCPofBewirtschaftungseinheit(bewirtschaftungseinheit: Bewirtschaftungseinheit): number {
    let cp = 0;
    bewirtschaftungseinheit.nutzungsflaechen.forEach(n => {
      cp += this.calculateCPofNutzungsflaeche(n);
    });
    if (bewirtschaftungseinheit.nutzungsflaechen.length !== 0) {
      cp = cp / bewirtschaftungseinheit.nutzungsflaechen.length;
    }
    return cp;
  }

  public calculateCPofNutzungsflaeche(nutzungsflaeche: Nutzungsflaeche): number {
    let cp = 0;
    nutzungsflaeche.bewirtschaftung_pro_jahr.forEach(bb => {
      cp += this.calculateCP(
          bb.hauptnutzungKultur,
          bb.hauptnutzungBodenbearbeitung,
          bb.zwischennutzungKultur,
          bb.zwischennutzungBodenbearbeitung
      );
    });
    if (nutzungsflaeche.bewirtschaftung_pro_jahr.length !== 0) {
      cp = cp / nutzungsflaeche.bewirtschaftung_pro_jahr.length;
    }
    return cp;
  }

  public calculateCP(kultur: Kultur, bodenbearbeitung: Bodenbearbeitung,
                     kulturZwischen: Kultur, bodenbearbeitungZwischen: Bodenbearbeitung): number {
    kulturZwischen = kulturZwischen.KUL_ID === 'keine' ? kultur : kulturZwischen;
    const cp = (kultur.factor + bodenbearbeitung.factor + kulturZwischen.factor + bodenbearbeitungZwischen.factor) / 4.0;
    return cp;
  }

  public calculateCenterCoordinate(feature: any) {
    const center = [0, 0];
    let count = 0;
    if (feature.geometry.type === 'MultiPolygon') {
      feature.geometry.coordinates.forEach(c0 => {
        c0.forEach(c1 => {
          c1.forEach(c2 => {
            //console.log('coords', c2);
            center[0] += c2[0];
            center[1] += c2[1];
            count += 1;
          });
        });
      });
    }
    if (count > 0) {
      center[0] = center[0] / count;
      center[1] = center[1] / count;
    }
    return center;
  }
}
