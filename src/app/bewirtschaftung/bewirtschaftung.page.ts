import { Component, OnInit } from '@angular/core';
import {Bodenbearbeitung, Kultur, Nutzungsflaeche} from '../model/domain';
import {SettingsService} from '../services/settings/settings.service';
import {KulturService} from '../services/kultur/kultur.service';
import {BodenbearbeitungService} from '../services/bodenbearbeitung/bodenbearbeitung.service';

@Component({
  selector: 'app-bewirtschaftung',
  templateUrl: './bewirtschaftung.page.html',
  styleUrls: ['./bewirtschaftung.page.scss'],
})
export class BewirtschaftungPage implements OnInit {
  currentSegment = 'y1';
  nutzungsflaechen: Nutzungsflaeche[] = [];
  kulturen: Kultur[] = [];
  bodenbearbeitung: Bodenbearbeitung[] = [];

  constructor(private kulturService: KulturService,
              private bodenbearbeitungService: BodenbearbeitungService,
              private settingsService: SettingsService) { }

  ngOnInit() {
    this.settingsService.getBewirtschaftungseinheiten(this.settingsService.getUser()).subscribe(
        (bwes) => {
          bwes.forEach(bwe => {
            bwe.nutzungsflaechen.forEach(nf => {
              this.nutzungsflaechen.push(nf);
            });
          });
        },
        (err) => console.error(err),
        () => {}
    );
    this.kulturService.findAll().subscribe(
        (kt) => {this.kulturen = kt; }
    );
    this.bodenbearbeitungService.findAll().subscribe(
        (bb) => { this.bodenbearbeitung = bb; }
    );
  }

  segmentChanged(event) {
    this.currentSegment = event.detail.value;
  }
}
