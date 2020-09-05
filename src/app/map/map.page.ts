import { Component, OnInit } from '@angular/core';
import {GeoApiService} from '../services/geoapi/geo-api.service';
import {LawisService} from '../services/lawis/lawis.service';
import {NavController} from '@ionic/angular';
import {SettingsService} from '../services/settings/settings.service';
import {MathService} from '../services/math/math.service';

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
  public area = 'be';
  public bewirtschaftungsflaechen_area: any = {};
  public nutzungsflaechen_area: any = {};
  public nutzungsflaechen_area_center: any[] = [];
  public area_area = null;
  public color;
  public bgColor = 'rgba(29,187,255,0.3)';

  constructor(private geoApiService: GeoApiService,
              private lawisService: LawisService,
              private nav: NavController,
              private mathService: MathService,
              private settingsService: SettingsService) { }

  ngOnInit() {
    this.nutzungsflaechen_area_center = [this.mapCenter];
    this.mapData = {'geometry': {'rings': []}};
    this.settingsService.getBewirtschaftungseinheiten(this.settingsService.getUser()).subscribe(
        (bwes) => {
          bwes.forEach(
              bwe => {
                this.bewirtschaftungsflaechen_area = bwe.bewirtschaftungsflaechen_area;
                this.nutzungsflaechen_area = bwe.nutzungsflaechen_area;
                this.nutzungsflaechen_area.features.forEach(feature => {
                  const center = this.mathService.calculateCenterCoordinate(feature);
                  console.warn('center', center);
                });
              }
          );
        },
        (err) => console.error(err),
        () => this.changeArea()
    );

    //this.area_area = this.bewirtschaftungsflaechen_area;
  }

  public onMapEvent($event) {
    console.log('onMapEvent', $event);
    this.mapEvent = $event;
    this.nav.navigateForward('bewirtschaftung');
    /* this.lawisService.getBewirtschaftungsflaechen2().subscribe(
        (res) => {
            console.info('info', res);
        },
        (err) => {
            console.error(err);
        },
        () => {}
    ); */
    /* this.geoApiService.identify($event).subscribe(
        (res: any) => {
          console.log('resultat', res);
          if (res === undefined || res.attributes === undefined) {
            return;
          }
        }); */
  }

  public segmentChanged(event) {
    this.area = event.detail.value;
    this.changeArea();

  }
  changeArea() {
    //console.log('area', this.area);
    if (this.area === 'be') {
      this.area_area = this.bewirtschaftungsflaechen_area;
      this.color = '#1dbbff';
      this.bgColor = 'rgba(29,187,255,0.3)';
    } else {
      this.area_area = this.nutzungsflaechen_area;
      this.color = '#CF34EB';
      this.bgColor = 'rgba(207,52,235,0.5)';
    }
  }
}
