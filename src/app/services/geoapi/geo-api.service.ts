import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeoApiService {
  private imageDisplayHeight = 360; // px
  private imageDisplayWidth = 1024; // px
  private imageDisplayResolution = 96; // dpi
  private URL = '//geoadmin.stoperosion.ch'; //'//api.geo.admin.ch';
  private IDENTIFY_PATH = '/rest/services/api/MapServer/identify';
  private QUERY_PARAMS = '?geometryType=esriGeometryPoint&geometryFormat=esrijson&tolerance=1&order=distance&returnGeometry=true&layers=all:ch.bfe.solarenergie-eignung-daecher&lang=de&sr=2056';//mapExtent=2724878.382441501,1210388.528680723,2724977.382441501,1210423.528680723&tolerance=10&sr=2056&layers=all:ch.swisstopo.fixpunkte-agnes,ch.bfe.solarenergie-eignung-daecher&lang=de&callback=olc_824';

  constructor(private httpService: HttpClient) { }

  public identify(event): Observable<any> {
    this.imageDisplayWidth = window.innerWidth;

    //console.warn(event);
    if (event.frameState === undefined) {
      return of(event);
    }
    let query = '&mapExtent=' + event.frameState.extent;
    query += '&geometry=' + event.coordinate;
    query += '&imageDisplay=' + [window.innerWidth, this.imageDisplayHeight, this.imageDisplayResolution]; // imageDisplay=990,350,96
    return this.httpService.get(this.URL + this.IDENTIFY_PATH + this.QUERY_PARAMS + query).pipe(
        //filter((res: any[]) => res.length > 0),
        map((res: any) => res.results[0])
    );
  }

}
