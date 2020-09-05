import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }

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
