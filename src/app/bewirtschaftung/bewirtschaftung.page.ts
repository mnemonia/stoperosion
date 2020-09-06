import { Component, OnInit } from '@angular/core';
import {BewirtschaftungProJahr, Bodenbearbeitung, Kultur, Nutzungsflaeche} from '../model/domain';
import {SettingsService} from '../services/settings/settings.service';
import {KulturService} from '../services/kultur/kultur.service';
import {BodenbearbeitungService} from '../services/bodenbearbeitung/bodenbearbeitung.service';
import {ActivatedRoute} from '@angular/router';
import {MathService} from '../services/math/math.service';

@Component({
  selector: 'app-bewirtschaftung',
  templateUrl: './bewirtschaftung.page.html',
  styleUrls: ['./bewirtschaftung.page.scss'],
})
export class BewirtschaftungPage implements OnInit {
  typeOption = 'nutzungsflaeche';
  currentJahr = 1;
  currentCP = 0;
  cpThreshold = 0.75;
  nutzungsflaechen: Nutzungsflaeche[] = [];
  kulturen: Kultur[] = [];
  bodenbearbeitungen: Bodenbearbeitung[] = [];
  bewirtschaftungen: BewirtschaftungProJahr[] = [];

  constructor(private kulturService: KulturService,
              private bodenbearbeitungService: BodenbearbeitungService,
              private mathService: MathService,
              private settingsService: SettingsService,
              route: ActivatedRoute) {
    route.paramMap.subscribe((v: any) => this.typeOption = v.params.type);
    /* const defaultKultur = new Kultur('keine', 'Keine', 1.0);
    const defautBodenbearbeitung = new Bodenbearbeitung('keine', 'Keine', 1.0);
    for (let i = 0; i < this.settingsService.anzahl_jahre; i++) {
      const bpj = new BewirtschaftungProJahr(i + 1);
      bpj.hauptnutzungKultur = defaultKultur;
      bpj.hauptnutzungBodenbearbeitung = defautBodenbearbeitung;
      // this.bewirtschaftungen.push(bpj);
    } */
  }

  ngOnInit() {
    this.settingsService.getBewirtschaftungseinheiten(this.settingsService.getUser()).subscribe(
        (bwes) => {
          bwes.forEach(bwe => {
            bwe.nutzungsflaechen.forEach((nf, index) => {
              this.nutzungsflaechen.push(nf);
              nf.bewirtschaftung_pro_jahr.forEach(bpj => {
                this.bewirtschaftungen.push(bpj);
              });
              //nf.bewirtschaftung_pro_jahr
              console.info('Nutzungsfläche', index + 1);
            });
          });
        },
        (err) => console.error(err),
        () => {
          this.recalcCP();
        }
    );
    this.kulturService.findAll().subscribe(
        (kt) => { this.kulturen = kt; }
    );
    this.bodenbearbeitungService.findAll().subscribe(
        (bb) => { this.bodenbearbeitungen = bb; }
    );
  }

  segmentChanged(event) {
    this.currentJahr = Number(event.detail.value);
  }

  setHauptnutzungKultur(bew: BewirtschaftungProJahr, event) {
    this.kulturen.filter(kultur => {
      return kultur.KUL_ID === event.detail.value;
    }).forEach(kultur => {
      bew.hauptnutzungKultur = kultur;
    });
    this.recalcCP();
    this.settingsService.save();
  }
  setHauptnutzungBodenbearbeitung(bew: BewirtschaftungProJahr, event) {
    this.bodenbearbeitungen.filter(bodenbearbeitung => {
      return bodenbearbeitung.id === event.detail.value;
    }).forEach(bodenbearbeitung => {
      bew.hauptnutzungBodenbearbeitung = bodenbearbeitung;
    });
    this.recalcCP();
    this.settingsService.save();
  }
  setZwischennutzungKultur(bew: BewirtschaftungProJahr, event) {
    this.kulturen.filter(kultur => {
      return kultur.KUL_ID === event.detail.value;
    }).forEach(kultur => {
      bew.zwischennutzungKultur = kultur;
    });
    this.recalcCP();
    this.settingsService.save();
  }
  setZwischennutzungBodenbearbeitung(bew: BewirtschaftungProJahr, event) {
    this.bodenbearbeitungen.filter(bodenbearbeitung => {
      return bodenbearbeitung.id === event.detail.value;
    }).forEach(bodenbearbeitung => {
      bew.zwischennutzungBodenbearbeitung = bodenbearbeitung;
    });
    this.recalcCP();
    this.settingsService.save();
  }
  recalcCP() {
    this.settingsService.getBewirtschaftungseinheiten(this.settingsService.getUser()).subscribe(
        (bwes) => {
          this.currentCP = 0;
          bwes.forEach(bwe => {
            this.currentCP += this.mathService.calculateCPofBewirtschaftungseinheit(bwe);
          });
          this.currentCP = this.currentCP / bwes.length;
        },
        (err) => console.error(err),
        () => {}
    );
  }
}
