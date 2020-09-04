import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LawisService {

  constructor(private httpService: HttpClient) { }

  getBewirtschaftungsflaechen(): Observable<any> {
    return this.httpService.get('https://test-geo.lawis.softec.ch/geoserver/LU/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=LU%3AT_BEWIRTSCHAFTUNGSEINHEITEN&maxFeatures=50&outputFormat=application%2Fjson',
        this.createRequestOptions()).pipe(
        tap(res => console.log(res))
    );

  }

  createRequestOptions(): any {
    const headers = {};
    headers['Content-Type'] = 'application/json';
    const base64encoded = 'aHVzOkhhY2tkYXlzMjAyMA==';
    headers['Authorization'] = 'Basic ' + base64encoded;
    return { headers: headers, withCredentials: true};
  }
}
