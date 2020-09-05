import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  public changeLanguage(event) {
    console.log(event.detail.value.toLowerCase());
    this.translate.use(event.detail.value.toLowerCase());
  }

}
