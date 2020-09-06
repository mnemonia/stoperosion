import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {CompsModule} from './comps/comps.module';
import {GeoApiService} from './services/geoapi/geo-api.service';
import {LawisService} from './services/lawis/lawis.service';
import {SettingsService} from './services/settings/settings.service';
import {MathService} from './services/math/math.service';
import {BodenbearbeitungService} from './services/bodenbearbeitung/bodenbearbeitung.service';
import {KulturService} from './services/kultur/kultur.service';
import {DatabaseService} from './services/database/database.service';
// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
      HttpClientModule,
    CompsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
      GeoApiService,
      LawisService,
      SettingsService,
      MathService,
      BodenbearbeitungService,
      KulturService,
      DatabaseService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
