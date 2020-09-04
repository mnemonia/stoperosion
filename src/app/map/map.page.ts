import { Component, OnInit } from '@angular/core';
import {GeoApiService} from '../services/geoapi/geo-api.service';
import {LawisService} from '../services/lawis/lawis.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  public mapData = {};
  public mapCenter = [2649846.329, 1229746.222];
  public mapEvent;
  public btrNr = 'LU3636';

  constructor(private geoApiService: GeoApiService, private lawisService: LawisService) { }

  ngOnInit() {
    this.mapData = {'geometry': {'rings': []}};
  }

  public onMapEvent($event) {
    console.log('onMapEvent', $event);
    this.mapEvent = $event;
    this.lawisService.getBewirtschaftungsflaechen2().subscribe(
        (res) => {
            console.info('info', res);
        },
        (err) => {
            console.error(err);
        },
        () => {}
    );
    /* this.geoApiService.identify($event).subscribe(
        (res: any) => {
          console.log('resultat', res);
          if (res === undefined || res.attributes === undefined) {
            return;
          }
        }); */
  }
}
