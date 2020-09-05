import { Component, OnInit } from '@angular/core';
import {Bodenbearbeitung, Kultur, Nutzungsflaeche} from '../model/domain';
import {SettingsService} from '../services/settings/settings.service';

@Component({
  selector: 'app-bewirtschaftung',
  templateUrl: './bewirtschaftung.page.html',
  styleUrls: ['./bewirtschaftung.page.scss'],
})
export class BewirtschaftungPage implements OnInit {
  currentSegment = 'y1';
  nutzungsflaechen: Nutzungsflaeche[] = [];
  jahre = {};
  kulturen: Kultur[] = [];
  bodenbearbeitung: Bodenbearbeitung[] = [];

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.settingsService.getBewirtschaftungseinheiten(this.settingsService.getUser()).subscribe(
        (bwes) => {
          bwes.forEach(bwe => {
            bwe.nutzungsflaechen.forEach(nf => {
              console.log(nf);
            });
          });
        },
        (err) => {},
        () => {}
    );
    let kultur = new Kultur('mais', 'Maïs (Silomais)', 1.0);
    this.kulturen.push(kultur);
    kultur = new Kultur('zuckerrueben', 'Zuckerrüben', 1.0);
    this.kulturen.push(kultur);
    kultur = new Kultur('winterweizen', 'Winterweizen', 1.0);
    this.kulturen.push(kultur);
    kultur = new Kultur('scharwbrachehw', 'Scharwbrache im Herbst und Winter', 1.0);
    this.kulturen.push(kultur);

    let bb = new Bodenbearbeitung('mulch30', 'über 30% Mulch', 1.0);
    this.bodenbearbeitung.push(bb);
    bb = new Bodenbearbeitung('pflug', 'Pflug', 1.0);
    this.bodenbearbeitung.push(bb);
    bb = new Bodenbearbeitung('direksaat', 'Direksaat', 1.0);
    this.bodenbearbeitung.push(bb);
  }

  segmentChanged(event) {
    console.log(event);
    this.currentSegment = event.detail.value;
  }
}
