import { Injectable } from '@angular/core';
import {
  Bewirtschaftungseinheit,
  Bodenbearbeitung,
  BodenbearbeitungProJahr,
  Kultur,
  KulturProJahr,
  Nutzungsflaeche,
  User
} from '../../model/domain';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  bewirtschaftungseinheiten: Bewirtschaftungseinheit[] = [];

  constructor() {
    const bwe = new Bewirtschaftungseinheit();
    bwe.BTR_NR = atob("TFUzNjM2");
    bwe.nutzungsflaechen = [];
    const nf = new Nutzungsflaeche();
    let kultur = new Kultur('mais', 'Mais (Silomais)', 1.0);
    let kulturProJahr = new KulturProJahr(kultur, 1);
    nf.kultur_pro_jahr.push(kulturProJahr);
    let bb = new Bodenbearbeitung('mulch30', 'über 30% Mulch', 1.0);
    let bodenbearbeitungProJahr = new BodenbearbeitungProJahr(bb, 1);
    nf.bodenbearbeitung_pro_jahr.push(bodenbearbeitungProJahr);
    bwe.nutzungsflaechen.push(nf);

    kultur = new Kultur('zuckerrueben', 'Zuckerrüben', 1.0);
    kulturProJahr = new KulturProJahr(kultur, 2);
    nf.kultur_pro_jahr.push(kulturProJahr);
    bb = new Bodenbearbeitung('pflug', 'Pflug', 1.0);
    bodenbearbeitungProJahr = new BodenbearbeitungProJahr(bb, 2);
    nf.bodenbearbeitung_pro_jahr.push(bodenbearbeitungProJahr);
    bwe.nutzungsflaechen.push(nf);

    kultur = new Kultur('winterweizen', 'Winterweizen', 1.0);
    kulturProJahr = new KulturProJahr(kultur, 3);
    nf.kultur_pro_jahr.push(kulturProJahr);
    bb = new Bodenbearbeitung('direksaat', 'Direksaat', 1.0);
    bodenbearbeitungProJahr = new BodenbearbeitungProJahr(bb, 3);
    nf.bodenbearbeitung_pro_jahr.push(bodenbearbeitungProJahr);
    bwe.nutzungsflaechen.push(nf);

    kultur = new Kultur('winterweizen', 'Winterweizen', 1.0);
    kulturProJahr = new KulturProJahr(kultur, 4);
    nf.kultur_pro_jahr.push(kulturProJahr);
    bb = new Bodenbearbeitung('direksaat', 'Direksaat', 1.0);
    bodenbearbeitungProJahr = new BodenbearbeitungProJahr(bb, 4);
    nf.bodenbearbeitung_pro_jahr.push(bodenbearbeitungProJahr);
    bwe.nutzungsflaechen.push(nf);

    bwe.bewirtschaftungsflaechen_area = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "id": "T_BEWIRTSCHAFTUNGSEINHEITEN.19520",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649403.979,
                    1230130.91
                  ],
                  [
                    2649362.14,
                    1230181.93
                  ],
                  [
                    2649324.13,
                    1230228.28
                  ],
                  [
                    2649286.01,
                    1230274.6
                  ],
                  [
                    2649273.74,
                    1230267.66
                  ],
                  [
                    2649252.051,
                    1230253.561
                  ],
                  [
                    2649250.271,
                    1230247.371
                  ],
                  [
                    2649256.341,
                    1230234.861
                  ],
                  [
                    2649262.161,
                    1230224.961
                  ],
                  [
                    2649271.601,
                    1230209.981
                  ],
                  [
                    2649294.91,
                    1230229.17
                  ],
                  [
                    2649324.51,
                    1230193.24
                  ],
                  [
                    2649297.621,
                    1230171.14
                  ],
                  [
                    2649299.941,
                    1230167.91
                  ],
                  [
                    2649310.191,
                    1230160.67
                  ],
                  [
                    2649324.76,
                    1230152.52
                  ],
                  [
                    2649338.1,
                    1230146.31
                  ],
                  [
                    2649356.48,
                    1230139.19
                  ],
                  [
                    2649376.2,
                    1230134.51
                  ],
                  [
                    2649403.979,
                    1230130.91
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "BWE_GEOM",
          "properties": {
            "BWE_ID": 19520,
            "id_bwe_num": "1082.244.0",
            "ist_definiert": false,
            "gemeinde": 1082,
            "av_parzelle": "244",
            "prozessStatus": 1,
            "objektStatus": 1,
            "zone_ausland": null,
            "produktion": true,
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "area": null,
            "length": null,
            "display1": "402.244.0",
            "display2": "Triengeracker",
            "GEO_ID": 19520
          }
        },
        {
          "type": "Feature",
          "id": "T_BEWIRTSCHAFTUNGSEINHEITEN.19521",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649355.42,
                    1230135.75
                  ],
                  [
                    2649336.62,
                    1230143
                  ],
                  [
                    2649323.06,
                    1230149.361
                  ],
                  [
                    2649308.361,
                    1230157.491
                  ],
                  [
                    2649306.941,
                    1230153.731
                  ],
                  [
                    2649313.7,
                    1230136.761
                  ],
                  [
                    2649321,
                    1230114.921
                  ],
                  [
                    2649333.299,
                    1230074.052
                  ],
                  [
                    2649339.499,
                    1230058.372
                  ],
                  [
                    2649362.999,
                    1230071.222
                  ],
                  [
                    2649375.699,
                    1230078.081
                  ],
                  [
                    2649355.42,
                    1230135.75
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "BWE_GEOM",
          "properties": {
            "BWE_ID": 19521,
            "id_bwe_num": "1082.247.0",
            "ist_definiert": false,
            "gemeinde": 1082,
            "av_parzelle": "247",
            "prozessStatus": 1,
            "objektStatus": 1,
            "zone_ausland": null,
            "produktion": true,
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "area": null,
            "length": null,
            "display1": "402.247.0",
            "display2": "Triengenacker",
            "GEO_ID": 19521
          }
        },
        {
          "type": "Feature",
          "id": "T_BEWIRTSCHAFTUNGSEINHEITEN.19527",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649443.912,
                    1229748.627
                  ],
                  [
                    2649433.178,
                    1229758.223
                  ],
                  [
                    2649430.97,
                    1229756.302
                  ],
                  [
                    2649429.432,
                    1229757.724
                  ],
                  [
                    2649429.04,
                    1229758.065
                  ],
                  [
                    2649428.598,
                    1229758.338
                  ],
                  [
                    2649428.118,
                    1229758.536
                  ],
                  [
                    2649427.612,
                    1229758.654
                  ],
                  [
                    2649427.094,
                    1229758.689
                  ],
                  [
                    2649421.105,
                    1229758.499
                  ],
                  [
                    2649420.421,
                    1229758.472
                  ],
                  [
                    2649419.741,
                    1229758.556
                  ],
                  [
                    2649419.084,
                    1229758.749
                  ],
                  [
                    2649418.468,
                    1229759.047
                  ],
                  [
                    2649417.908,
                    1229759.441
                  ],
                  [
                    2649417.419,
                    1229759.921
                  ],
                  [
                    2649417.015,
                    1229760.474
                  ],
                  [
                    2649416.706,
                    1229761.085
                  ],
                  [
                    2649410.183,
                    1229771.423
                  ],
                  [
                    2649408.902,
                    1229773.019
                  ],
                  [
                    2649407.428,
                    1229774.439
                  ],
                  [
                    2649396.265,
                    1229781.667
                  ],
                  [
                    2649385.465,
                    1229785.357
                  ],
                  [
                    2649366.516,
                    1229788.987
                  ],
                  [
                    2649355.286,
                    1229792.438
                  ],
                  [
                    2649345.226,
                    1229796.268
                  ],
                  [
                    2649341.246,
                    1229794.708
                  ],
                  [
                    2649342.216,
                    1229786.178
                  ],
                  [
                    2649368.565,
                    1229730.789
                  ],
                  [
                    2649397.152,
                    1229671.802
                  ],
                  [
                    2649397.435,
                    1229671.939
                  ],
                  [
                    2649397.982,
                    1229671.228
                  ],
                  [
                    2649398.622,
                    1229670.598
                  ],
                  [
                    2649399.342,
                    1229670.063
                  ],
                  [
                    2649400.129,
                    1229669.631
                  ],
                  [
                    2649401.131,
                    1229669.265
                  ],
                  [
                    2649402.178,
                    1229669.068
                  ],
                  [
                    2649403.244,
                    1229669.045
                  ],
                  [
                    2649404.3,
                    1229669.197
                  ],
                  [
                    2649405.316,
                    1229669.519
                  ],
                  [
                    2649446.291,
                    1229688.534
                  ],
                  [
                    2649469.658,
                    1229699.377
                  ],
                  [
                    2649453.217,
                    1229729.811
                  ],
                  [
                    2649448.441,
                    1229739.158
                  ],
                  [
                    2649443.912,
                    1229748.627
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "BWE_GEOM",
          "properties": {
            "BWE_ID": 19527,
            "id_bwe_num": "1082.267.0",
            "ist_definiert": false,
            "gemeinde": 1082,
            "av_parzelle": "267",
            "prozessStatus": 1,
            "objektStatus": 1,
            "zone_ausland": null,
            "produktion": true,
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "area": null,
            "length": null,
            "display1": "402.267.0",
            "display2": "Hell",
            "GEO_ID": 19527
          }
        },
        {
          "type": "Feature",
          "id": "T_BEWIRTSCHAFTUNGSEINHEITEN.19578",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649971.662,
                    1229797.67
                  ],
                  [
                    2649976.142,
                    1229803.729
                  ],
                  [
                    2650004.183,
                    1229852.358
                  ],
                  [
                    2650007.843,
                    1229855.728
                  ],
                  [
                    2650012.323,
                    1229858.058
                  ],
                  [
                    2650017.153,
                    1229858.948
                  ],
                  [
                    2650022.063,
                    1229859.668
                  ],
                  [
                    2650025.323,
                    1229861.698
                  ],
                  [
                    2650027.193,
                    1229865.458
                  ],
                  [
                    2650027.763,
                    1229868.937
                  ],
                  [
                    2650027.003,
                    1229873.757
                  ],
                  [
                    2650008.182,
                    1229986.255
                  ],
                  [
                    2650002.272,
                    1230022.265
                  ],
                  [
                    2649960.471,
                    1229999.56
                  ],
                  [
                    2649954.482,
                    1229996.307
                  ],
                  [
                    2649953.77,
                    1229995.92
                  ],
                  [
                    2649923.441,
                    1229979.447
                  ],
                  [
                    2649881.624,
                    1229956.78
                  ],
                  [
                    2649844.392,
                    1229936.599
                  ],
                  [
                    2649751.362,
                    1229886.051
                  ],
                  [
                    2649757.062,
                    1229872.081
                  ],
                  [
                    2649764.782,
                    1229849.841
                  ],
                  [
                    2649770.301,
                    1229837.201
                  ],
                  [
                    2649779.471,
                    1229822.622
                  ],
                  [
                    2649792.161,
                    1229804.242
                  ],
                  [
                    2649807.45,
                    1229785.902
                  ],
                  [
                    2649828.35,
                    1229764.222
                  ],
                  [
                    2649846.329,
                    1229746.222
                  ],
                  [
                    2649885.33,
                    1229779.101
                  ],
                  [
                    2649902.916,
                    1229793.926
                  ],
                  [
                    2649914.252,
                    1229780.267
                  ],
                  [
                    2649925.588,
                    1229766.607
                  ],
                  [
                    2649932.44,
                    1229758.352
                  ],
                  [
                    2649966.682,
                    1229792.15
                  ],
                  [
                    2649971.662,
                    1229797.67
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "BWE_GEOM",
          "properties": {
            "BWE_ID": 19578,
            "id_bwe_num": "1082.348.0",
            "ist_definiert": false,
            "gemeinde": 1082,
            "av_parzelle": "348",
            "prozessStatus": 1,
            "objektStatus": 1,
            "zone_ausland": null,
            "produktion": true,
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "area": null,
            "length": null,
            "display1": "402.348.0",
            "display2": "Kirchfeld",
            "GEO_ID": 19578
          }
        },
        {
          "type": "Feature",
          "id": "T_BEWIRTSCHAFTUNGSEINHEITEN.19587",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649672.423,
                    1229832.403
                  ],
                  [
                    2649744.792,
                    1229885.391
                  ],
                  [
                    2649745.652,
                    1229889.541
                  ],
                  [
                    2649739.472,
                    1229901.011
                  ],
                  [
                    2649727.673,
                    1229918.87
                  ],
                  [
                    2649716.613,
                    1229933.12
                  ],
                  [
                    2649686.454,
                    1229965.43
                  ],
                  [
                    2649648.615,
                    1230008.489
                  ],
                  [
                    2649631.555,
                    1230028.839
                  ],
                  [
                    2649577.376,
                    1229994.221
                  ],
                  [
                    2649524.586,
                    1229960.422
                  ],
                  [
                    2649556.885,
                    1229911.103
                  ],
                  [
                    2649594.874,
                    1229855.313
                  ],
                  [
                    2649598.724,
                    1229855.433
                  ],
                  [
                    2649607.415,
                    1229844.379
                  ],
                  [
                    2649643.983,
                    1229870.962
                  ],
                  [
                    2649672.423,
                    1229832.403
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "BWE_GEOM",
          "properties": {
            "BWE_ID": 19587,
            "id_bwe_num": "1082.356.0",
            "ist_definiert": false,
            "gemeinde": 1082,
            "av_parzelle": "356",
            "prozessStatus": 1,
            "objektStatus": 1,
            "zone_ausland": null,
            "produktion": true,
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "area": null,
            "length": null,
            "display1": "402.356.0",
            "display2": "Kirchfeld",
            "GEO_ID": 19587
          }
        },
        {
          "type": "Feature",
          "id": "T_BEWIRTSCHAFTUNGSEINHEITEN.19596",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2650172.098,
                    1229566.161
                  ],
                  [
                    2650183.169,
                    1229694.823
                  ],
                  [
                    2650221.668,
                    1229736.722
                  ],
                  [
                    2650217.299,
                    1229736.537
                  ],
                  [
                    2650194.618,
                    1229754.067
                  ],
                  [
                    2650184.778,
                    1229741.755
                  ],
                  [
                    2650184.707,
                    1229740.307
                  ],
                  [
                    2650184.037,
                    1229735.287
                  ],
                  [
                    2650178.296,
                    1229731.237
                  ],
                  [
                    2650158.148,
                    1229716.234
                  ],
                  [
                    2650139.579,
                    1229717.763
                  ],
                  [
                    2650103.348,
                    1229697.024
                  ],
                  [
                    2650102.276,
                    1229704.478
                  ],
                  [
                    2650101.646,
                    1229705.666
                  ],
                  [
                    2650095.686,
                    1229702.29
                  ],
                  [
                    2650097.366,
                    1229688.38
                  ],
                  [
                    2650095.616,
                    1229678.56
                  ],
                  [
                    2650091.736,
                    1229669.301
                  ],
                  [
                    2650085.786,
                    1229661.231
                  ],
                  [
                    2650078.166,
                    1229654.791
                  ],
                  [
                    2650069.286,
                    1229650.261
                  ],
                  [
                    2650064.175,
                    1229647.231
                  ],
                  [
                    2650062.305,
                    1229645.381
                  ],
                  [
                    2650060.475,
                    1229642.041
                  ],
                  [
                    2650059.915,
                    1229637.922
                  ],
                  [
                    2650060.445,
                    1229633.972
                  ],
                  [
                    2650063.685,
                    1229620.272
                  ],
                  [
                    2650064.716,
                    1229616.402
                  ],
                  [
                    2650066.036,
                    1229612.682
                  ],
                  [
                    2650067.676,
                    1229609.592
                  ],
                  [
                    2650069.996,
                    1229606.372
                  ],
                  [
                    2650072.356,
                    1229603.832
                  ],
                  [
                    2650078.746,
                    1229599.112
                  ],
                  [
                    2650100.297,
                    1229586.052
                  ],
                  [
                    2650116.237,
                    1229577.762
                  ],
                  [
                    2650130.717,
                    1229572.922
                  ],
                  [
                    2650144.388,
                    1229570.25
                  ],
                  [
                    2650172.098,
                    1229566.161
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "BWE_GEOM",
          "properties": {
            "BWE_ID": 19596,
            "id_bwe_num": "1082.369.2",
            "ist_definiert": false,
            "gemeinde": 1082,
            "av_parzelle": "369",
            "prozessStatus": 1,
            "objektStatus": 1,
            "zone_ausland": null,
            "produktion": true,
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "area": null,
            "length": null,
            "display1": "402.369.2",
            "display2": "Bleumatt",
            "GEO_ID": 19596
          }
        },
        {
          "type": "Feature",
          "id": "T_BEWIRTSCHAFTUNGSEINHEITEN.19657",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649317.844,
                    1229606.632
                  ],
                  [
                    2649406.734,
                    1229643.81
                  ],
                  [
                    2649393.914,
                    1229670.231
                  ],
                  [
                    2649365.345,
                    1229729.109
                  ],
                  [
                    2649329.536,
                    1229804.058
                  ],
                  [
                    2649323.316,
                    1229811.878
                  ],
                  [
                    2649313.207,
                    1229821.377
                  ],
                  [
                    2649306.937,
                    1229824.067
                  ],
                  [
                    2649302.767,
                    1229823.728
                  ],
                  [
                    2649155.568,
                    1229770.72
                  ],
                  [
                    2649153.338,
                    1229764.091
                  ],
                  [
                    2649191.296,
                    1229673.502
                  ],
                  [
                    2649218.395,
                    1229608.993
                  ],
                  [
                    2649234.165,
                    1229571.614
                  ],
                  [
                    2649317.844,
                    1229606.632
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "BWE_GEOM",
          "properties": {
            "BWE_ID": 19657,
            "id_bwe_num": "1082.460.0",
            "ist_definiert": false,
            "gemeinde": 1082,
            "av_parzelle": "460",
            "prozessStatus": 1,
            "objektStatus": 1,
            "zone_ausland": null,
            "produktion": true,
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "area": null,
            "length": null,
            "display1": "402.460.0",
            "display2": "Kleinfeld",
            "GEO_ID": 19657
          }
        },
        {
          "type": "Feature",
          "id": "T_BEWIRTSCHAFTUNGSEINHEITEN.19732",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649957.633,
                    1229671.572
                  ],
                  [
                    2649954.199,
                    1229659.668
                  ],
                  [
                    2649965.564,
                    1229660.653
                  ],
                  [
                    2649980.894,
                    1229660.642
                  ],
                  [
                    2649980.982,
                    1229662.636
                  ],
                  [
                    2649987.199,
                    1229662.364
                  ],
                  [
                    2649987.164,
                    1229660.312
                  ],
                  [
                    2650000.522,
                    1229659.259
                  ],
                  [
                    2650038.031,
                    1229655.41
                  ],
                  [
                    2650046.717,
                    1229654.998
                  ],
                  [
                    2650054.266,
                    1229655.438
                  ],
                  [
                    2650060.214,
                    1229656.487
                  ],
                  [
                    2650065.897,
                    1229658.623
                  ],
                  [
                    2650071.042,
                    1229661.713
                  ],
                  [
                    2650075.998,
                    1229665.352
                  ],
                  [
                    2650080.163,
                    1229669.61
                  ],
                  [
                    2650083.512,
                    1229674.596
                  ],
                  [
                    2650086.003,
                    1229680.052
                  ],
                  [
                    2650087.433,
                    1229685.815
                  ],
                  [
                    2650087.578,
                    1229692.03
                  ],
                  [
                    2650086.801,
                    1229697.512
                  ],
                  [
                    2650078.496,
                    1229693.04
                  ],
                  [
                    2650079.036,
                    1229692.2
                  ],
                  [
                    2650072.625,
                    1229689.16
                  ],
                  [
                    2650066.675,
                    1229687.65
                  ],
                  [
                    2650050.835,
                    1229684.841
                  ],
                  [
                    2650040.155,
                    1229683.121
                  ],
                  [
                    2650029.534,
                    1229675.641
                  ],
                  [
                    2650014.664,
                    1229669.662
                  ],
                  [
                    2650005.884,
                    1229668.572
                  ],
                  [
                    2649998.884,
                    1229673.862
                  ],
                  [
                    2649989.113,
                    1229674.282
                  ],
                  [
                    2649984.013,
                    1229675.842
                  ],
                  [
                    2649974.353,
                    1229676.052
                  ],
                  [
                    2649962.133,
                    1229672.882
                  ],
                  [
                    2649958.463,
                    1229671.252
                  ],
                  [
                    2649957.633,
                    1229671.572
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "BWE_GEOM",
          "properties": {
            "BWE_ID": 19732,
            "id_bwe_num": "1082.92.0",
            "ist_definiert": false,
            "gemeinde": 1082,
            "av_parzelle": "92",
            "prozessStatus": 1,
            "objektStatus": 1,
            "zone_ausland": null,
            "produktion": true,
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "area": null,
            "length": null,
            "display1": "402.92.0",
            "display2": "Bleumatt",
            "GEO_ID": 19732
          }
        },
        {
          "type": "Feature",
          "id": "T_BEWIRTSCHAFTUNGSEINHEITEN.49900",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649399.532,
                    1231517.786
                  ],
                  [
                    2649429.013,
                    1231525.289
                  ],
                  [
                    2649419.368,
                    1231575.835
                  ],
                  [
                    2649417.543,
                    1231585.133
                  ],
                  [
                    2649415.937,
                    1231594.472
                  ],
                  [
                    2649414.614,
                    1231603.577
                  ],
                  [
                    2649413.5,
                    1231612.709
                  ],
                  [
                    2649412.284,
                    1231635.09
                  ],
                  [
                    2649411.66,
                    1231641.677
                  ],
                  [
                    2649410.315,
                    1231648.155
                  ],
                  [
                    2649408.224,
                    1231654.189
                  ],
                  [
                    2649405.503,
                    1231659.966
                  ],
                  [
                    2649390.899,
                    1231687.429
                  ],
                  [
                    2649372.95,
                    1231722.917
                  ],
                  [
                    2649348.067,
                    1231761.563
                  ],
                  [
                    2649347.396,
                    1231762.189
                  ],
                  [
                    2649346.63,
                    1231762.695
                  ],
                  [
                    2649345.79,
                    1231763.066
                  ],
                  [
                    2649344.901,
                    1231763.293
                  ],
                  [
                    2649343.987,
                    1231763.368
                  ],
                  [
                    2649343.072,
                    1231763.291
                  ],
                  [
                    2649342.255,
                    1231763.061
                  ],
                  [
                    2649341.482,
                    1231762.708
                  ],
                  [
                    2649340.774,
                    1231762.24
                  ],
                  [
                    2649340.146,
                    1231761.668
                  ],
                  [
                    2649339.613,
                    1231761.007
                  ],
                  [
                    2649339.188,
                    1231760.272
                  ],
                  [
                    2649328.624,
                    1231709.996
                  ],
                  [
                    2649298.524,
                    1231567.834
                  ],
                  [
                    2649292.733,
                    1231540.046
                  ],
                  [
                    2649336.166,
                    1231548.281
                  ],
                  [
                    2649391.424,
                    1231558.835
                  ],
                  [
                    2649399.532,
                    1231517.786
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "BWE_GEOM",
          "properties": {
            "BWE_ID": 49900,
            "id_bwe_num": "1104.714.0",
            "ist_definiert": false,
            "gemeinde": 1104,
            "av_parzelle": "714",
            "prozessStatus": 1,
            "objektStatus": 1,
            "zone_ausland": null,
            "produktion": true,
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "area": null,
            "length": null,
            "display1": "424.714.0",
            "display2": "Berg",
            "GEO_ID": 49900
          }
        },
        {
          "type": "Feature",
          "id": "T_BEWIRTSCHAFTUNGSEINHEITEN.49901",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649400.939,
                    1231082.925
                  ],
                  [
                    2649410.717,
                    1231097.036
                  ],
                  [
                    2649427.998,
                    1231115.433
                  ],
                  [
                    2649471.392,
                    1231135.216
                  ],
                  [
                    2649516.64,
                    1231155.859
                  ],
                  [
                    2649570.164,
                    1231180.027
                  ],
                  [
                    2649606.763,
                    1231208.242
                  ],
                  [
                    2649657.276,
                    1231247.001
                  ],
                  [
                    2649682.372,
                    1231266.533
                  ],
                  [
                    2649641.392,
                    1231333.904
                  ],
                  [
                    2649599.409,
                    1231402.308
                  ],
                  [
                    2649594.012,
                    1231410.616
                  ],
                  [
                    2649588.229,
                    1231418.66
                  ],
                  [
                    2649562.691,
                    1231398.536
                  ],
                  [
                    2649537.824,
                    1231391.924
                  ],
                  [
                    2649501.273,
                    1231368.715
                  ],
                  [
                    2649498.617,
                    1231365.529
                  ],
                  [
                    2649493.744,
                    1231370.54
                  ],
                  [
                    2649489.274,
                    1231375.914
                  ],
                  [
                    2649484.985,
                    1231382.02
                  ],
                  [
                    2649481.216,
                    1231388.461
                  ],
                  [
                    2649469.263,
                    1231410.055
                  ],
                  [
                    2649448.475,
                    1231447.617
                  ],
                  [
                    2649441.607,
                    1231466.605
                  ],
                  [
                    2649434.316,
                    1231494.928
                  ],
                  [
                    2649429.013,
                    1231525.289
                  ],
                  [
                    2649399.532,
                    1231517.786
                  ],
                  [
                    2649391.424,
                    1231558.835
                  ],
                  [
                    2649336.166,
                    1231548.281
                  ],
                  [
                    2649292.733,
                    1231540.046
                  ],
                  [
                    2649290.397,
                    1231527.526
                  ],
                  [
                    2649288.712,
                    1231514.901
                  ],
                  [
                    2649287.677,
                    1231502.159
                  ],
                  [
                    2649287.307,
                    1231489.38
                  ],
                  [
                    2649288.509,
                    1231449.211
                  ],
                  [
                    2649288.775,
                    1231442.151
                  ],
                  [
                    2649288.509,
                    1231435.091
                  ],
                  [
                    2649287.714,
                    1231428.071
                  ],
                  [
                    2649286.393,
                    1231421.131
                  ],
                  [
                    2649284.363,
                    1231413.879
                  ],
                  [
                    2649281.759,
                    1231406.812
                  ],
                  [
                    2649278.597,
                    1231399.977
                  ],
                  [
                    2649274.898,
                    1231393.417
                  ],
                  [
                    2649269.938,
                    1231385.264
                  ],
                  [
                    2649267.435,
                    1231380.581
                  ],
                  [
                    2649265.386,
                    1231375.683
                  ],
                  [
                    2649263.81,
                    1231370.612
                  ],
                  [
                    2649262.722,
                    1231365.415
                  ],
                  [
                    2649262.35,
                    1231360.297
                  ],
                  [
                    2649262.448,
                    1231355.166
                  ],
                  [
                    2649263.015,
                    1231350.065
                  ],
                  [
                    2649264.046,
                    1231345.038
                  ],
                  [
                    2649269.941,
                    1231320.323
                  ],
                  [
                    2649283.255,
                    1231265.266
                  ],
                  [
                    2649284.842,
                    1231260.404
                  ],
                  [
                    2649285.702,
                    1231255.362
                  ],
                  [
                    2649285.656,
                    1231251.85
                  ],
                  [
                    2649285.138,
                    1231248.376
                  ],
                  [
                    2649284.157,
                    1231245.003
                  ],
                  [
                    2649282.864,
                    1231241.916
                  ],
                  [
                    2649281.097,
                    1231239.073
                  ],
                  [
                    2649278.901,
                    1231236.546
                  ],
                  [
                    2649276.341,
                    1231234.443
                  ],
                  [
                    2649273.482,
                    1231232.77
                  ],
                  [
                    2649270.395,
                    1231231.566
                  ],
                  [
                    2649268.246,
                    1231230.494
                  ],
                  [
                    2649266.249,
                    1231229.159
                  ],
                  [
                    2649264.438,
                    1231227.582
                  ],
                  [
                    2649262.768,
                    1231225.685
                  ],
                  [
                    2649261.364,
                    1231223.583
                  ],
                  [
                    2649260.252,
                    1231221.313
                  ],
                  [
                    2649260.732,
                    1231215.597
                  ],
                  [
                    2649261.592,
                    1231209.925
                  ],
                  [
                    2649262.828,
                    1231204.323
                  ],
                  [
                    2649264.756,
                    1231198.658
                  ],
                  [
                    2649267.072,
                    1231193.142
                  ],
                  [
                    2649269.767,
                    1231187.799
                  ],
                  [
                    2649275.26,
                    1231180
                  ],
                  [
                    2649281.047,
                    1231172.417
                  ],
                  [
                    2649288.112,
                    1231164.051
                  ],
                  [
                    2649295.536,
                    1231156.002
                  ],
                  [
                    2649305.898,
                    1231146.395
                  ],
                  [
                    2649311.62,
                    1231141.6
                  ],
                  [
                    2649317.469,
                    1231136.962
                  ],
                  [
                    2649364.969,
                    1231100.445
                  ],
                  [
                    2649373.175,
                    1231094.396
                  ],
                  [
                    2649381.431,
                    1231089.728
                  ],
                  [
                    2649389.538,
                    1231086.062
                  ],
                  [
                    2649400.939,
                    1231082.925
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "BWE_GEOM",
          "properties": {
            "BWE_ID": 49901,
            "id_bwe_num": "1104.716.0",
            "ist_definiert": false,
            "gemeinde": 1104,
            "av_parzelle": "716",
            "prozessStatus": 1,
            "objektStatus": 1,
            "zone_ausland": null,
            "produktion": true,
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "area": null,
            "length": null,
            "display1": "424.716.0",
            "display2": "Rütihof",
            "GEO_ID": 49901
          }
        },
        {
          "type": "Feature",
          "id": "T_BEWIRTSCHAFTUNGSEINHEITEN.49918",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649255.784,
                    1231220.474
                  ],
                  [
                    2649255.257,
                    1231221.301
                  ],
                  [
                    2649254.603,
                    1231222.03
                  ],
                  [
                    2649253.838,
                    1231222.644
                  ],
                  [
                    2649252.984,
                    1231223.125
                  ],
                  [
                    2649252.014,
                    1231223.462
                  ],
                  [
                    2649251,
                    1231223.629
                  ],
                  [
                    2649249.973,
                    1231223.621
                  ],
                  [
                    2649248.962,
                    1231223.437
                  ],
                  [
                    2649247.997,
                    1231223.084
                  ],
                  [
                    2649246.618,
                    1231222.425
                  ],
                  [
                    2649245.371,
                    1231221.543
                  ],
                  [
                    2649244.291,
                    1231220.462
                  ],
                  [
                    2649243.409,
                    1231219.214
                  ],
                  [
                    2649242.751,
                    1231217.835
                  ],
                  [
                    2649242.336,
                    1231216.365
                  ],
                  [
                    2649240.937,
                    1231212.675
                  ],
                  [
                    2649239.733,
                    1231208.917
                  ],
                  [
                    2649238.282,
                    1231202.544
                  ],
                  [
                    2649237.489,
                    1231196.056
                  ],
                  [
                    2649237.151,
                    1231189.049
                  ],
                  [
                    2649237.46,
                    1231182.041
                  ],
                  [
                    2649238.398,
                    1231175.426
                  ],
                  [
                    2649239.913,
                    1231168.919
                  ],
                  [
                    2649255.143,
                    1231107.979
                  ],
                  [
                    2649258.767,
                    1231094.001
                  ],
                  [
                    2649260.949,
                    1231086.885
                  ],
                  [
                    2649264.341,
                    1231078.467
                  ],
                  [
                    2649271.395,
                    1231061.707
                  ],
                  [
                    2649273.344,
                    1231056.309
                  ],
                  [
                    2649275.032,
                    1231050.824
                  ],
                  [
                    2649276.6,
                    1231044.547
                  ],
                  [
                    2649277.828,
                    1231038.195
                  ],
                  [
                    2649297.55,
                    1231020.714
                  ],
                  [
                    2649318.294,
                    1231045.124
                  ],
                  [
                    2649329.155,
                    1231055.349
                  ],
                  [
                    2649340.181,
                    1231070.133
                  ],
                  [
                    2649349.759,
                    1231077.785
                  ],
                  [
                    2649371.049,
                    1231091.382
                  ],
                  [
                    2649362.359,
                    1231097.446
                  ],
                  [
                    2649314.946,
                    1231133.863
                  ],
                  [
                    2649303.352,
                    1231143.369
                  ],
                  [
                    2649292.599,
                    1231153.205
                  ],
                  [
                    2649285.192,
                    1231161.317
                  ],
                  [
                    2649278.143,
                    1231169.742
                  ],
                  [
                    2649272.031,
                    1231177.713
                  ],
                  [
                    2649266.24,
                    1231185.919
                  ],
                  [
                    2649263.412,
                    1231191.527
                  ],
                  [
                    2649260.982,
                    1231197.319
                  ],
                  [
                    2649258.962,
                    1231203.267
                  ],
                  [
                    2649257.531,
                    1231208.93
                  ],
                  [
                    2649256.47,
                    1231214.674
                  ],
                  [
                    2649255.784,
                    1231220.474
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "BWE_GEOM",
          "properties": {
            "BWE_ID": 49918,
            "id_bwe_num": "1104.737.0",
            "ist_definiert": false,
            "gemeinde": 1104,
            "av_parzelle": "737",
            "prozessStatus": 1,
            "objektStatus": 1,
            "zone_ausland": null,
            "produktion": true,
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "area": null,
            "length": null,
            "display1": "424.737.0",
            "display2": "Rütihof",
            "GEO_ID": 49918
          }
        },
        {
          "type": "Feature",
          "id": "T_BEWIRTSCHAFTUNGSEINHEITEN.49920",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649473.022,
                    1230734.037
                  ],
                  [
                    2649447.357,
                    1230774.081
                  ],
                  [
                    2649335.428,
                    1230947.566
                  ],
                  [
                    2649327.865,
                    1230964.35
                  ],
                  [
                    2649313.918,
                    1230940.45
                  ],
                  [
                    2649308.855,
                    1230935.831
                  ],
                  [
                    2649298.879,
                    1230931.736
                  ],
                  [
                    2649303.097,
                    1230909.548
                  ],
                  [
                    2649304.435,
                    1230900.917
                  ],
                  [
                    2649305.458,
                    1230892.244
                  ],
                  [
                    2649306.146,
                    1230883.788
                  ],
                  [
                    2649306.534,
                    1230875.312
                  ],
                  [
                    2649308.937,
                    1230831.179
                  ],
                  [
                    2649309.244,
                    1230824.857
                  ],
                  [
                    2649310.016,
                    1230818.574
                  ],
                  [
                    2649311.247,
                    1230812.365
                  ],
                  [
                    2649313.088,
                    1230805.98
                  ],
                  [
                    2649315.416,
                    1230799.755
                  ],
                  [
                    2649318.218,
                    1230793.729
                  ],
                  [
                    2649322.435,
                    1230784.667
                  ],
                  [
                    2649327.357,
                    1230775.967
                  ],
                  [
                    2649332.934,
                    1230767.87
                  ],
                  [
                    2649339.126,
                    1230760.232
                  ],
                  [
                    2649388.804,
                    1230704.3
                  ],
                  [
                    2649404.601,
                    1230686.22
                  ],
                  [
                    2649406.149,
                    1230683.967
                  ],
                  [
                    2649407.315,
                    1230681.495
                  ],
                  [
                    2649408.071,
                    1230678.867
                  ],
                  [
                    2649408.394,
                    1230676.153
                  ],
                  [
                    2649408.279,
                    1230673.422
                  ],
                  [
                    2649407.657,
                    1230670.576
                  ],
                  [
                    2649406.558,
                    1230667.878
                  ],
                  [
                    2649405.014,
                    1230665.407
                  ],
                  [
                    2649403.072,
                    1230663.236
                  ],
                  [
                    2649400.787,
                    1230661.428
                  ],
                  [
                    2649401.914,
                    1230659.908
                  ],
                  [
                    2649414.093,
                    1230668.938
                  ],
                  [
                    2649437.213,
                    1230690.808
                  ],
                  [
                    2649461.502,
                    1230713.797
                  ],
                  [
                    2649471.971,
                    1230732.191
                  ],
                  [
                    2649473.022,
                    1230734.037
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "BWE_GEOM",
          "properties": {
            "BWE_ID": 49920,
            "id_bwe_num": "1104.740.0",
            "ist_definiert": false,
            "gemeinde": 1104,
            "av_parzelle": "740",
            "prozessStatus": 1,
            "objektStatus": 1,
            "zone_ausland": null,
            "produktion": true,
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "area": null,
            "length": null,
            "display1": "424.740.0",
            "display2": "Rütihof",
            "GEO_ID": 49920
          }
        },
        {
          "type": "Feature",
          "id": "T_BEWIRTSCHAFTUNGSEINHEITEN.772630",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2650206.273,
                    1230105.547
                  ],
                  [
                    2650214.968,
                    1230108.84
                  ],
                  [
                    2650221.888,
                    1230116.72
                  ],
                  [
                    2650227.058,
                    1230126.669
                  ],
                  [
                    2650235.039,
                    1230142.549
                  ],
                  [
                    2650256.8,
                    1230170.128
                  ],
                  [
                    2650263.571,
                    1230182.838
                  ],
                  [
                    2650269.401,
                    1230202.037
                  ],
                  [
                    2650271.671,
                    1230219.537
                  ],
                  [
                    2650253.601,
                    1230232.197
                  ],
                  [
                    2650212.87,
                    1230260.357
                  ],
                  [
                    2650171.01,
                    1230289.238
                  ],
                  [
                    2650207.402,
                    1230326.076
                  ],
                  [
                    2650180.361,
                    1230344.647
                  ],
                  [
                    2650163.131,
                    1230354.607
                  ],
                  [
                    2650141.591,
                    1230364.107
                  ],
                  [
                    2650122.99,
                    1230370.028
                  ],
                  [
                    2650100.45,
                    1230374.408
                  ],
                  [
                    2650075.379,
                    1230376.869
                  ],
                  [
                    2650021.998,
                    1230381.34
                  ],
                  [
                    2650088.238,
                    1230324.659
                  ],
                  [
                    2650050.526,
                    1230290.18
                  ],
                  [
                    2650043.433,
                    1230283.705
                  ],
                  [
                    2650068.802,
                    1230271.029
                  ],
                  [
                    2650082.489,
                    1230245.825
                  ],
                  [
                    2650100.863,
                    1230206.794
                  ],
                  [
                    2650120.738,
                    1230174.247
                  ],
                  [
                    2650149.676,
                    1230144.716
                  ],
                  [
                    2650196.74,
                    1230111.029
                  ],
                  [
                    2650206.273,
                    1230105.547
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "BWE_GEOM",
          "properties": {
            "BWE_ID": 772630,
            "id_bwe_num": "1082.333.0",
            "ist_definiert": false,
            "gemeinde": 1082,
            "av_parzelle": "333",
            "prozessStatus": 1,
            "objektStatus": 1,
            "zone_ausland": null,
            "produktion": true,
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "area": null,
            "length": null,
            "display1": "402.333.0",
            "display2": "Kirchfeld",
            "GEO_ID": 772630
          }
        },
        {
          "type": "Feature",
          "id": "T_BEWIRTSCHAFTUNGSEINHEITEN.772631",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2650022.633,
                    1229998.365
                  ],
                  [
                    2650092.293,
                    1230007.193
                  ],
                  [
                    2650089.363,
                    1230127.575
                  ],
                  [
                    2650092.065,
                    1230129.378
                  ],
                  [
                    2650113.036,
                    1230105.194
                  ],
                  [
                    2650149.472,
                    1230069.45
                  ],
                  [
                    2650151.666,
                    1230068.552
                  ],
                  [
                    2650164.546,
                    1230082.471
                  ],
                  [
                    2650182.436,
                    1230095.831
                  ],
                  [
                    2650194.057,
                    1230101.74
                  ],
                  [
                    2650204.197,
                    1230104.76
                  ],
                  [
                    2650206.273,
                    1230105.547
                  ],
                  [
                    2650196.74,
                    1230111.029
                  ],
                  [
                    2650149.676,
                    1230144.716
                  ],
                  [
                    2650120.738,
                    1230174.247
                  ],
                  [
                    2650100.863,
                    1230206.794
                  ],
                  [
                    2650082.489,
                    1230245.825
                  ],
                  [
                    2650068.802,
                    1230271.029
                  ],
                  [
                    2650043.433,
                    1230283.705
                  ],
                  [
                    2649995.884,
                    1230240.292
                  ],
                  [
                    2649990.984,
                    1230246.322
                  ],
                  [
                    2649994.383,
                    1230228.562
                  ],
                  [
                    2649995.373,
                    1230201.932
                  ],
                  [
                    2649994.412,
                    1230146.942
                  ],
                  [
                    2649994.642,
                    1230127.253
                  ],
                  [
                    2649995.682,
                    1230108.453
                  ],
                  [
                    2649999.372,
                    1230078.004
                  ],
                  [
                    2650007.972,
                    1230026.415
                  ],
                  [
                    2650011.652,
                    1230004.415
                  ],
                  [
                    2650015.923,
                    1229999.755
                  ],
                  [
                    2650022.633,
                    1229998.365
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "BWE_GEOM",
          "properties": {
            "BWE_ID": 772631,
            "id_bwe_num": "1082.333.1",
            "ist_definiert": false,
            "gemeinde": 1082,
            "av_parzelle": "333",
            "prozessStatus": 1,
            "objektStatus": 1,
            "zone_ausland": null,
            "produktion": true,
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "area": null,
            "length": null,
            "display1": "402.333.1",
            "display2": "Kirchfeld",
            "GEO_ID": 772631
          }
        },
        {
          "type": "Feature",
          "id": "T_BEWIRTSCHAFTUNGSEINHEITEN.772632",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2650090.036,
                    1229720.74
                  ],
                  [
                    2650097.186,
                    1229721.539
                  ],
                  [
                    2650145.337,
                    1229744.368
                  ],
                  [
                    2650159.127,
                    1229752.578
                  ],
                  [
                    2650169.587,
                    1229761.998
                  ],
                  [
                    2650179.368,
                    1229773.837
                  ],
                  [
                    2650187.408,
                    1229786.277
                  ],
                  [
                    2650194.608,
                    1229801.426
                  ],
                  [
                    2650202.058,
                    1229825.046
                  ],
                  [
                    2650208.478,
                    1229834.835
                  ],
                  [
                    2650220.999,
                    1229842.075
                  ],
                  [
                    2650238.375,
                    1229863.453
                  ],
                  [
                    2650243.967,
                    1229873.484
                  ],
                  [
                    2650266.163,
                    1229878.974
                  ],
                  [
                    2650278.239,
                    1229885.712
                  ],
                  [
                    2650284.676,
                    1229892.807
                  ],
                  [
                    2650312.005,
                    1229914.716
                  ],
                  [
                    2650318.306,
                    1229930.005
                  ],
                  [
                    2650330.991,
                    1229951.551
                  ],
                  [
                    2650203.527,
                    1230016.03
                  ],
                  [
                    2650203.501,
                    1230019.474
                  ],
                  [
                    2650201.117,
                    1230019.509
                  ],
                  [
                    2650199.645,
                    1230019.404
                  ],
                  [
                    2650199.681,
                    1230018.536
                  ],
                  [
                    2650199.47,
                    1230015.583
                  ],
                  [
                    2650187.832,
                    1230016.039
                  ],
                  [
                    2650188.293,
                    1230019.729
                  ],
                  [
                    2650183.574,
                    1230020.167
                  ],
                  [
                    2650182.907,
                    1230020.297
                  ],
                  [
                    2650183.17,
                    1230026.028
                  ],
                  [
                    2650183.349,
                    1230026.975
                  ],
                  [
                    2650170.701,
                    1230027.425
                  ],
                  [
                    2650163.315,
                    1230031.248
                  ],
                  [
                    2650163.453,
                    1230032.819
                  ],
                  [
                    2650159.147,
                    1230030.235
                  ],
                  [
                    2650158.986,
                    1230025.792
                  ],
                  [
                    2650155.036,
                    1230019.483
                  ],
                  [
                    2650147.526,
                    1230014.133
                  ],
                  [
                    2650136.526,
                    1230010.033
                  ],
                  [
                    2650122.185,
                    1230007.323
                  ],
                  [
                    2650023.273,
                    1229994.785
                  ],
                  [
                    2650018.923,
                    1229993.495
                  ],
                  [
                    2650014.453,
                    1229987.725
                  ],
                  [
                    2650033.074,
                    1229875.637
                  ],
                  [
                    2650035.364,
                    1229875.977
                  ],
                  [
                    2650036.384,
                    1229869.777
                  ],
                  [
                    2650034.124,
                    1229869.397
                  ],
                  [
                    2650042.514,
                    1229819.518
                  ],
                  [
                    2650045.014,
                    1229807.028
                  ],
                  [
                    2650048.094,
                    1229794.819
                  ],
                  [
                    2650052.475,
                    1229781.619
                  ],
                  [
                    2650058.005,
                    1229768.379
                  ],
                  [
                    2650066.045,
                    1229752.999
                  ],
                  [
                    2650073.695,
                    1229740.639
                  ],
                  [
                    2650081.755,
                    1229728.819
                  ],
                  [
                    2650083.725,
                    1229730.049
                  ],
                  [
                    2650087.186,
                    1229724.81
                  ],
                  [
                    2650085.275,
                    1229723.54
                  ],
                  [
                    2650090.036,
                    1229720.74
                  ]
                ],
                [
                  [
                    2650181.683,
                    1230008.753
                  ],
                  [
                    2650179.324,
                    1230009.938
                  ],
                  [
                    2650181.103,
                    1230013.477
                  ],
                  [
                    2650183.462,
                    1230012.292
                  ],
                  [
                    2650181.683,
                    1230008.753
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "BWE_GEOM",
          "properties": {
            "BWE_ID": 772632,
            "id_bwe_num": "1082.336.1",
            "ist_definiert": false,
            "gemeinde": 1082,
            "av_parzelle": "336",
            "prozessStatus": 1,
            "objektStatus": 1,
            "zone_ausland": null,
            "produktion": true,
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "area": null,
            "length": null,
            "display1": "402.336.1",
            "display2": "Kirchfeld",
            "GEO_ID": 772632
          }
        },
        {
          "type": "Feature",
          "id": "T_BEWIRTSCHAFTUNGSEINHEITEN.772644",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2650095.686,
                    1229702.29
                  ],
                  [
                    2650101.846,
                    1229705.78
                  ],
                  [
                    2650113.256,
                    1229709.519
                  ],
                  [
                    2650139.297,
                    1229727.199
                  ],
                  [
                    2650152.397,
                    1229721.049
                  ],
                  [
                    2650158.157,
                    1229724.458
                  ],
                  [
                    2650170.958,
                    1229733.038
                  ],
                  [
                    2650176.618,
                    1229734.568
                  ],
                  [
                    2650180.508,
                    1229737.888
                  ],
                  [
                    2650189.228,
                    1229754.397
                  ],
                  [
                    2650194.508,
                    1229772.727
                  ],
                  [
                    2650211.409,
                    1229779.537
                  ],
                  [
                    2650215.969,
                    1229789.706
                  ],
                  [
                    2650222.489,
                    1229791.766
                  ],
                  [
                    2650224.899,
                    1229796.626
                  ],
                  [
                    2650221.649,
                    1229804.686
                  ],
                  [
                    2650223.209,
                    1229824.696
                  ],
                  [
                    2650241.249,
                    1229831.235
                  ],
                  [
                    2650243.229,
                    1229843.845
                  ],
                  [
                    2650222.239,
                    1229838.615
                  ],
                  [
                    2650210.948,
                    1229832.096
                  ],
                  [
                    2650205.408,
                    1229823.676
                  ],
                  [
                    2650197.878,
                    1229799.996
                  ],
                  [
                    2650190.578,
                    1229784.487
                  ],
                  [
                    2650182.208,
                    1229771.607
                  ],
                  [
                    2650172.288,
                    1229759.558
                  ],
                  [
                    2650161.337,
                    1229749.728
                  ],
                  [
                    2650146.827,
                    1229741.078
                  ],
                  [
                    2650098.726,
                    1229718.349
                  ],
                  [
                    2650095.446,
                    1229714.85
                  ],
                  [
                    2650093.306,
                    1229708.92
                  ],
                  [
                    2650095.686,
                    1229702.29
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "BWE_GEOM",
          "properties": {
            "BWE_ID": 772644,
            "id_bwe_num": "1082.338.0",
            "ist_definiert": false,
            "gemeinde": 1082,
            "av_parzelle": "338",
            "prozessStatus": 1,
            "objektStatus": 1,
            "zone_ausland": null,
            "produktion": true,
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "area": null,
            "length": null,
            "display1": "402.338.0",
            "display2": "Kirchfeld-Wald",
            "GEO_ID": 772644
          }
        },
        {
          "type": "Feature",
          "id": "T_BEWIRTSCHAFTUNGSEINHEITEN.772633",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649631.406,
                    1230053.929
                  ],
                  [
                    2649712.485,
                    1230099.057
                  ],
                  [
                    2649809.715,
                    1230152.924
                  ],
                  [
                    2649877.303,
                    1230189.374
                  ],
                  [
                    2649895.353,
                    1230198.063
                  ],
                  [
                    2649875.813,
                    1230211.734
                  ],
                  [
                    2649755.564,
                    1230281.475
                  ],
                  [
                    2649715.744,
                    1230304.605
                  ],
                  [
                    2649701.514,
                    1230314.915
                  ],
                  [
                    2649688.614,
                    1230326.845
                  ],
                  [
                    2649670.944,
                    1230346.186
                  ],
                  [
                    2649637.804,
                    1230383.726
                  ],
                  [
                    2649588.915,
                    1230339.977
                  ],
                  [
                    2649565.525,
                    1230369.087
                  ],
                  [
                    2649540.836,
                    1230326.137
                  ],
                  [
                    2649539.046,
                    1230319.767
                  ],
                  [
                    2649540.576,
                    1230310.497
                  ],
                  [
                    2649549.266,
                    1230284.547
                  ],
                  [
                    2649560.337,
                    1230252.067
                  ],
                  [
                    2649568.327,
                    1230222.097
                  ],
                  [
                    2649585.247,
                    1230165.117
                  ],
                  [
                    2649593.007,
                    1230132.108
                  ],
                  [
                    2649602.727,
                    1230107.998
                  ],
                  [
                    2649610.546,
                    1230090.478
                  ],
                  [
                    2649624.496,
                    1230054.319
                  ],
                  [
                    2649631.406,
                    1230053.929
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "BWE_GEOM",
          "properties": {
            "BWE_ID": 772633,
            "id_bwe_num": "1082.345.0",
            "ist_definiert": false,
            "gemeinde": 1082,
            "av_parzelle": "345",
            "prozessStatus": 1,
            "objektStatus": 1,
            "zone_ausland": null,
            "produktion": true,
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "area": null,
            "length": null,
            "display1": "402.345.0",
            "display2": "Birrenmoos",
            "GEO_ID": 772633
          }
        },
        {
          "type": "Feature",
          "id": "T_BEWIRTSCHAFTUNGSEINHEITEN.772627",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649524.586,
                    1229960.422
                  ],
                  [
                    2649577.376,
                    1229994.221
                  ],
                  [
                    2649631.555,
                    1230028.839
                  ],
                  [
                    2649622.676,
                    1230045.379
                  ],
                  [
                    2649616.316,
                    1230050.549
                  ],
                  [
                    2649588.516,
                    1230054.859
                  ],
                  [
                    2649565.486,
                    1230058.369
                  ],
                  [
                    2649551.097,
                    1230061.74
                  ],
                  [
                    2649538.417,
                    1230066.96
                  ],
                  [
                    2649525.917,
                    1230074.34
                  ],
                  [
                    2649515.157,
                    1230082.42
                  ],
                  [
                    2649502.238,
                    1230092.819
                  ],
                  [
                    2649488.798,
                    1230102.249
                  ],
                  [
                    2649478.138,
                    1230108.369
                  ],
                  [
                    2649459.478,
                    1230116.54
                  ],
                  [
                    2649439.959,
                    1230122.01
                  ],
                  [
                    2649458.968,
                    1230088.78
                  ],
                  [
                    2649480.017,
                    1230049.291
                  ],
                  [
                    2649503.187,
                    1230006.211
                  ],
                  [
                    2649507.196,
                    1229994.471
                  ],
                  [
                    2649507.746,
                    1229976.922
                  ],
                  [
                    2649510.246,
                    1229960.872
                  ],
                  [
                    2649519.466,
                    1229964.372
                  ],
                  [
                    2649524.586,
                    1229960.422
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "BWE_GEOM",
          "properties": {
            "BWE_ID": 772627,
            "id_bwe_num": "1082.355.0",
            "ist_definiert": false,
            "gemeinde": 1082,
            "av_parzelle": "355",
            "prozessStatus": 1,
            "objektStatus": 1,
            "zone_ausland": null,
            "produktion": true,
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "area": null,
            "length": null,
            "display1": "402.355.0",
            "display2": "Birrenmoos",
            "GEO_ID": 772627
          }
        },
        {
          "type": "Feature",
          "id": "T_BEWIRTSCHAFTUNGSEINHEITEN.772625",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649139.673,
                    1230148.563
                  ],
                  [
                    2649153.202,
                    1230150.123
                  ],
                  [
                    2649164.352,
                    1230153.332
                  ],
                  [
                    2649172.332,
                    1230158.142
                  ],
                  [
                    2649177.622,
                    1230165.372
                  ],
                  [
                    2649180.942,
                    1230176.782
                  ],
                  [
                    2649180.122,
                    1230191.632
                  ],
                  [
                    2649173.072,
                    1230237.802
                  ],
                  [
                    2649173.112,
                    1230247.392
                  ],
                  [
                    2649176.601,
                    1230255.282
                  ],
                  [
                    2649183.131,
                    1230260.382
                  ],
                  [
                    2649191.191,
                    1230261.251
                  ],
                  [
                    2649198.581,
                    1230258.581
                  ],
                  [
                    2649205.741,
                    1230251.871
                  ],
                  [
                    2649220.231,
                    1230233.911
                  ],
                  [
                    2649226.281,
                    1230230.491
                  ],
                  [
                    2649193.881,
                    1230301.901
                  ],
                  [
                    2649173.891,
                    1230343.518
                  ],
                  [
                    2648983.814,
                    1230272.174
                  ],
                  [
                    2649011.134,
                    1230212.284
                  ],
                  [
                    2649038.734,
                    1230151.834
                  ],
                  [
                    2649054.084,
                    1230160.054
                  ],
                  [
                    2649071.334,
                    1230165.843
                  ],
                  [
                    2649080.084,
                    1230167.023
                  ],
                  [
                    2649090.003,
                    1230166.913
                  ],
                  [
                    2649097.643,
                    1230165.093
                  ],
                  [
                    2649104.783,
                    1230161.933
                  ],
                  [
                    2649122.073,
                    1230152.633
                  ],
                  [
                    2649130.993,
                    1230149.503
                  ],
                  [
                    2649139.673,
                    1230148.563
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "BWE_GEOM",
          "properties": {
            "BWE_ID": 772625,
            "id_bwe_num": "1082.454.0",
            "ist_definiert": false,
            "gemeinde": 1082,
            "av_parzelle": "454",
            "prozessStatus": 1,
            "objektStatus": 1,
            "zone_ausland": null,
            "produktion": true,
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "area": null,
            "length": null,
            "display1": "402.454.0",
            "display2": "Triengeracker",
            "GEO_ID": 772625
          }
        },
        {
          "type": "Feature",
          "id": "T_BEWIRTSCHAFTUNGSEINHEITEN.54608",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2650085.571,
                    1229702.451
                  ],
                  [
                    2650085.486,
                    1229702.795
                  ],
                  [
                    2650083.504,
                    1229707.944
                  ],
                  [
                    2650081.192,
                    1229713.196
                  ],
                  [
                    2650080.643,
                    1229715.498
                  ],
                  [
                    2650080.277,
                    1229717.026
                  ],
                  [
                    2650077.792,
                    1229720.984
                  ],
                  [
                    2650077.116,
                    1229722.061
                  ],
                  [
                    2650065.451,
                    1229739.444
                  ],
                  [
                    2650059.775,
                    1229748.474
                  ],
                  [
                    2650053.982,
                    1229759.073
                  ],
                  [
                    2650053.227,
                    1229758.728
                  ],
                  [
                    2650052.711,
                    1229759.719
                  ],
                  [
                    2650046.037,
                    1229772.544
                  ],
                  [
                    2650041.297,
                    1229784.207
                  ],
                  [
                    2650036.5,
                    1229800.909
                  ],
                  [
                    2650033.847,
                    1229815.741
                  ],
                  [
                    2650030.081,
                    1229848.037
                  ],
                  [
                    2650028.133,
                    1229849.801
                  ],
                  [
                    2650025.723,
                    1229851.051
                  ],
                  [
                    2650026.334,
                    1229852.322
                  ],
                  [
                    2650022.803,
                    1229852.968
                  ],
                  [
                    2650017.913,
                    1229852.808
                  ],
                  [
                    2650012.423,
                    1229851.238
                  ],
                  [
                    2650008.963,
                    1229848.668
                  ],
                  [
                    2650006.393,
                    1229845.178
                  ],
                  [
                    2649980.663,
                    1229801.03
                  ],
                  [
                    2649976.113,
                    1229794.86
                  ],
                  [
                    2649971.112,
                    1229789.13
                  ],
                  [
                    2649963.022,
                    1229781.11
                  ],
                  [
                    2649982.873,
                    1229780.95
                  ],
                  [
                    2649981.393,
                    1229759.43
                  ],
                  [
                    2649961.672,
                    1229761.29
                  ],
                  [
                    2649971.146,
                    1229754.277
                  ],
                  [
                    2649972.763,
                    1229752.983
                  ],
                  [
                    2649974.252,
                    1229751.54
                  ],
                  [
                    2649975.367,
                    1229750.255
                  ],
                  [
                    2649984.212,
                    1229748.662
                  ],
                  [
                    2649982.227,
                    1229734.735
                  ],
                  [
                    2649991.725,
                    1229729.648
                  ],
                  [
                    2649991.771,
                    1229729.639
                  ],
                  [
                    2649992.672,
                    1229729.141
                  ],
                  [
                    2650004.06,
                    1229722.84
                  ],
                  [
                    2650006.744,
                    1229721.285
                  ],
                  [
                    2650014.462,
                    1229717.686
                  ],
                  [
                    2650026.384,
                    1229713.501
                  ],
                  [
                    2650037.812,
                    1229711.088
                  ],
                  [
                    2650041.802,
                    1229710.733
                  ],
                  [
                    2650067.586,
                    1229707.668
                  ],
                  [
                    2650072.295,
                    1229706.323
                  ],
                  [
                    2650073.004,
                    1229706.097
                  ],
                  [
                    2650085.571,
                    1229702.451
                  ]
                ],
                [
                  [
                    2649989.005,
                    1229746.22
                  ],
                  [
                    2649988.236,
                    1229742.241
                  ],
                  [
                    2649985.704,
                    1229742.783
                  ],
                  [
                    2649986.543,
                    1229746.548
                  ],
                  [
                    2649989.005,
                    1229746.22
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "BWE_GEOM",
          "properties": {
            "BWE_ID": 54608,
            "id_bwe_num": "1082.87.1",
            "ist_definiert": false,
            "gemeinde": 1082,
            "av_parzelle": "87",
            "prozessStatus": 1,
            "objektStatus": 1,
            "zone_ausland": null,
            "produktion": true,
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "area": null,
            "length": null,
            "display1": "402.87.1",
            "display2": "Kirchfeld",
            "GEO_ID": 54608
          }
        },
        {
          "type": "Feature",
          "id": "T_BEWIRTSCHAFTUNGSEINHEITEN.772634",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2648966.942,
                    1230270.4
                  ],
                  [
                    2648983.814,
                    1230272.174
                  ],
                  [
                    2649173.891,
                    1230343.518
                  ],
                  [
                    2649167.75,
                    1230356.302
                  ],
                  [
                    2649141.05,
                    1230409.532
                  ],
                  [
                    2649114.1,
                    1230463.072
                  ],
                  [
                    2649098.7,
                    1230491.732
                  ],
                  [
                    2649084.489,
                    1230515.062
                  ],
                  [
                    2649079.586,
                    1230509.074
                  ],
                  [
                    2649070.475,
                    1230501.887
                  ],
                  [
                    2649062.43,
                    1230496.803
                  ],
                  [
                    2649056.262,
                    1230493.391
                  ],
                  [
                    2648913.275,
                    1230427.167
                  ],
                  [
                    2648966.942,
                    1230270.4
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "BWE_GEOM",
          "properties": {
            "BWE_ID": 772634,
            "id_bwe_num": "1104.404.0",
            "ist_definiert": false,
            "gemeinde": 1104,
            "av_parzelle": "404",
            "prozessStatus": 1,
            "objektStatus": 1,
            "zone_ausland": null,
            "produktion": true,
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "area": null,
            "length": null,
            "display1": "424.404.0",
            "display2": "Grund / Triengeracher",
            "GEO_ID": 772634
          }
        },
        {
          "type": "Feature",
          "id": "T_BEWIRTSCHAFTUNGSEINHEITEN.546077",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2654096.702,
                    1233997.979
                  ],
                  [
                    2654109.839,
                    1234009.774
                  ],
                  [
                    2654106.405,
                    1234010.322
                  ],
                  [
                    2654034.527,
                    1234021.784
                  ],
                  [
                    2653954.049,
                    1234034.619
                  ],
                  [
                    2653960.238,
                    1233997.177
                  ],
                  [
                    2654016.41,
                    1233989.205
                  ],
                  [
                    2654073.021,
                    1233981.21
                  ],
                  [
                    2654076.088,
                    1233980.777
                  ],
                  [
                    2654096.702,
                    1233997.979
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "BWE_GEOM",
          "properties": {
            "BWE_ID": 546077,
            "id_bwe_num": "4135.236.0",
            "ist_definiert": false,
            "gemeinde": 4135,
            "av_parzelle": "236",
            "prozessStatus": 1,
            "objektStatus": 1,
            "zone_ausland": null,
            "produktion": true,
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "area": null,
            "length": null,
            "display1": "AG4135.236.0",
            "display2": "Weid",
            "GEO_ID": 546077
          }
        },
        {
          "type": "Feature",
          "id": "T_BEWIRTSCHAFTUNGSEINHEITEN.848336",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2654151.071,
                    1234084.854
                  ],
                  [
                    2654156.169,
                    1234085.245
                  ],
                  [
                    2654161.864,
                    1234088.578
                  ],
                  [
                    2654185.884,
                    1234103.633
                  ],
                  [
                    2654194.996,
                    1234108.544
                  ],
                  [
                    2654152.267,
                    1234150.663
                  ],
                  [
                    2654109.343,
                    1234193.289
                  ],
                  [
                    2654066.266,
                    1234235.796
                  ],
                  [
                    2654022.192,
                    1234279.226
                  ],
                  [
                    2653983.194,
                    1234317.951
                  ],
                  [
                    2653990.766,
                    1234321.603
                  ],
                  [
                    2653955.238,
                    1234359.009
                  ],
                  [
                    2653939.6,
                    1234375.607
                  ],
                  [
                    2653896.153,
                    1234340.256
                  ],
                  [
                    2653893.706,
                    1234338.341
                  ],
                  [
                    2653898.077,
                    1234330.928
                  ],
                  [
                    2653901.814,
                    1234322.878
                  ],
                  [
                    2653904.669,
                    1234312.987
                  ],
                  [
                    2653917.47,
                    1234318.941
                  ],
                  [
                    2653921.18,
                    1234307.385
                  ],
                  [
                    2653918.152,
                    1234305.893
                  ],
                  [
                    2653920.829,
                    1234300.184
                  ],
                  [
                    2653911.338,
                    1234295.774
                  ],
                  [
                    2653907.826,
                    1234303.205
                  ],
                  [
                    2653904.669,
                    1234312.987
                  ],
                  [
                    2653897.759,
                    1234307.568
                  ],
                  [
                    2653895.359,
                    1234305.934
                  ],
                  [
                    2653901.349,
                    1234290.511
                  ],
                  [
                    2653882.549,
                    1234286.135
                  ],
                  [
                    2653872.569,
                    1234284.035
                  ],
                  [
                    2653874.421,
                    1234281.899
                  ],
                  [
                    2653903.581,
                    1234276.036
                  ],
                  [
                    2653916.046,
                    1234271.965
                  ],
                  [
                    2653946.016,
                    1234256.548
                  ],
                  [
                    2653965.466,
                    1234240.998
                  ],
                  [
                    2653987.199,
                    1234220.741
                  ],
                  [
                    2654016.717,
                    1234188.162
                  ],
                  [
                    2654040.949,
                    1234166.161
                  ],
                  [
                    2654077.577,
                    1234134.792
                  ],
                  [
                    2654101.837,
                    1234115.18
                  ],
                  [
                    2654133.715,
                    1234096.398
                  ],
                  [
                    2654151.071,
                    1234084.854
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "BWE_GEOM",
          "properties": {
            "BWE_ID": 848336,
            "id_bwe_num": "4135.255.1",
            "ist_definiert": false,
            "gemeinde": 4135,
            "av_parzelle": "255",
            "prozessStatus": 1,
            "objektStatus": 1,
            "zone_ausland": null,
            "produktion": true,
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "area": null,
            "length": null,
            "display1": "AG4135.255.1",
            "display2": "Geisshof",
            "GEO_ID": 848336
          }
        },
        {
          "type": "Feature",
          "id": "T_BEWIRTSCHAFTUNGSEINHEITEN.546079",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2653896.153,
                    1234340.256
                  ],
                  [
                    2653939.6,
                    1234375.607
                  ],
                  [
                    2653921.018,
                    1234395.164
                  ],
                  [
                    2653919.137,
                    1234397.193
                  ],
                  [
                    2653893.254,
                    1234368.077
                  ],
                  [
                    2653884.919,
                    1234358.715
                  ],
                  [
                    2653883.78,
                    1234355.907
                  ],
                  [
                    2653893.706,
                    1234338.341
                  ],
                  [
                    2653896.153,
                    1234340.256
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "BWE_GEOM",
          "properties": {
            "BWE_ID": 546079,
            "id_bwe_num": "4135.254.0",
            "ist_definiert": false,
            "gemeinde": 4135,
            "av_parzelle": "254",
            "prozessStatus": 1,
            "objektStatus": 1,
            "zone_ausland": null,
            "produktion": true,
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "area": null,
            "length": null,
            "display1": "AG4135.254.0",
            "display2": "Geisshof",
            "GEO_ID": 546079
          }
        },
        {
          "type": "Feature",
          "id": "T_BEWIRTSCHAFTUNGSEINHEITEN.546080",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2654288.586,
                    1234087.807
                  ],
                  [
                    2654263.545,
                    1234091.2
                  ],
                  [
                    2654233.389,
                    1234095.042
                  ],
                  [
                    2654215.177,
                    1234094.546
                  ],
                  [
                    2654189.37,
                    1234083.203
                  ],
                  [
                    2654168.382,
                    1234071.102
                  ],
                  [
                    2654165.838,
                    1234069.634
                  ],
                  [
                    2654170.648,
                    1234064.226
                  ],
                  [
                    2654173.625,
                    1234065.179
                  ],
                  [
                    2654194.318,
                    1234071.861
                  ],
                  [
                    2654218.754,
                    1234080.101
                  ],
                  [
                    2654235.647,
                    1234081.307
                  ],
                  [
                    2654263.75,
                    1234082.327
                  ],
                  [
                    2654289.064,
                    1234082.178
                  ],
                  [
                    2654288.586,
                    1234087.807
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "BWE_GEOM",
          "properties": {
            "BWE_ID": 546080,
            "id_bwe_num": "4135.265.0",
            "ist_definiert": false,
            "gemeinde": 4135,
            "av_parzelle": "265",
            "prozessStatus": 1,
            "objektStatus": 1,
            "zone_ausland": null,
            "produktion": true,
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "area": null,
            "length": null,
            "display1": "AG4135.265.0",
            "display2": "Weiden",
            "GEO_ID": 546080
          }
        }
      ],
      "totalFeatures": 25,
      "numberMatched": 25,
      "numberReturned": 25,
      "timeStamp": "2020-09-04T19:25:28.507Z",
      "crs": {
        "type": "name",
        "properties": {
          "name": "urn:ogc:def:crs:EPSG::2056"
        }
      }
    };

    bwe.nutzungsflaechen_area = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "id": "T_KULTUR.1694834",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649846.329,
                    1229746.222
                  ],
                  [
                    2649899.729,
                    1229795.427
                  ],
                  [
                    2649908.642,
                    1229802.408
                  ],
                  [
                    2649917.609,
                    1229791.319
                  ],
                  [
                    2649952.148,
                    1229819.336
                  ],
                  [
                    2649971.662,
                    1229797.67
                  ],
                  [
                    2649976.142,
                    1229803.729
                  ],
                  [
                    2650004.183,
                    1229852.358
                  ],
                  [
                    2650007.843,
                    1229855.728
                  ],
                  [
                    2650012.323,
                    1229858.058
                  ],
                  [
                    2650017.153,
                    1229858.948
                  ],
                  [
                    2650022.063,
                    1229859.668
                  ],
                  [
                    2650024.805,
                    1229871.484
                  ],
                  [
                    2650021.68,
                    1229893.555
                  ],
                  [
                    2649998.587,
                    1230020.263
                  ],
                  [
                    2649923.441,
                    1229979.447
                  ],
                  [
                    2649844.392,
                    1229936.599
                  ],
                  [
                    2649751.362,
                    1229886.051
                  ],
                  [
                    2649757.062,
                    1229872.081
                  ],
                  [
                    2649764.782,
                    1229849.841
                  ],
                  [
                    2649770.301,
                    1229837.201
                  ],
                  [
                    2649779.471,
                    1229822.622
                  ],
                  [
                    2649792.161,
                    1229804.242
                  ],
                  [
                    2649807.45,
                    1229785.902
                  ],
                  [
                    2649828.35,
                    1229764.222
                  ],
                  [
                    2649846.329,
                    1229746.222
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1694834,
            "BWE_ID": 19578,
            "Nutzungsidentifikator": "LU_1694834",
            "nutzungsart": 508,
            "GEO_ID": 1438991,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1694834,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.348.0",
            "display1": "508 KöMai [407.93 a]",
            "display2": "407.93",
            "programme": "",
            "art": "acker"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.608917",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649440.183,
                    1229738
                  ],
                  [
                    2649440.204,
                    1229738.006
                  ],
                  [
                    2649440.219,
                    1229738.001
                  ],
                  [
                    2649440.483,
                    1229738.077
                  ],
                  [
                    2649448.817,
                    1229738.399
                  ],
                  [
                    2649448.636,
                    1229738.776
                  ],
                  [
                    2649448.441,
                    1229739.158
                  ],
                  [
                    2649443.912,
                    1229748.627
                  ],
                  [
                    2649433.177,
                    1229758.223
                  ],
                  [
                    2649430.97,
                    1229756.302
                  ],
                  [
                    2649429.432,
                    1229757.724
                  ],
                  [
                    2649429.049,
                    1229758.057
                  ],
                  [
                    2649428.891,
                    1229758.157
                  ],
                  [
                    2649428.629,
                    1229758.319
                  ],
                  [
                    2649428.6,
                    1229758.28
                  ],
                  [
                    2649428.566,
                    1229758.224
                  ],
                  [
                    2649428.535,
                    1229758.167
                  ],
                  [
                    2649428.508,
                    1229758.107
                  ],
                  [
                    2649428.485,
                    1229758.046
                  ],
                  [
                    2649428.466,
                    1229757.983
                  ],
                  [
                    2649428.451,
                    1229757.919
                  ],
                  [
                    2649428.44,
                    1229757.855
                  ],
                  [
                    2649428.432,
                    1229757.757
                  ],
                  [
                    2649427.629,
                    1229754.564
                  ],
                  [
                    2649428.199,
                    1229750.664
                  ],
                  [
                    2649428.201,
                    1229750.566
                  ],
                  [
                    2649428.207,
                    1229750.501
                  ],
                  [
                    2649428.218,
                    1229750.436
                  ],
                  [
                    2649428.233,
                    1229750.372
                  ],
                  [
                    2649428.252,
                    1229750.31
                  ],
                  [
                    2649428.265,
                    1229750.274
                  ],
                  [
                    2649429.065,
                    1229745.998
                  ],
                  [
                    2649431.657,
                    1229741.39
                  ],
                  [
                    2649431.667,
                    1229741.364
                  ],
                  [
                    2649431.694,
                    1229741.304
                  ],
                  [
                    2649431.725,
                    1229741.246
                  ],
                  [
                    2649431.76,
                    1229741.191
                  ],
                  [
                    2649431.798,
                    1229741.138
                  ],
                  [
                    2649431.839,
                    1229741.087
                  ],
                  [
                    2649431.884,
                    1229741.039
                  ],
                  [
                    2649431.932,
                    1229740.995
                  ],
                  [
                    2649431.982,
                    1229740.953
                  ],
                  [
                    2649432.035,
                    1229740.915
                  ],
                  [
                    2649432.091,
                    1229740.88
                  ],
                  [
                    2649432.149,
                    1229740.85
                  ],
                  [
                    2649432.208,
                    1229740.823
                  ],
                  [
                    2649432.251,
                    1229740.806
                  ],
                  [
                    2649439.862,
                    1229738.053
                  ],
                  [
                    2649439.924,
                    1229738.034
                  ],
                  [
                    2649439.988,
                    1229738.019
                  ],
                  [
                    2649440.053,
                    1229738.009
                  ],
                  [
                    2649440.183,
                    1229738
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 608917,
            "BWE_ID": 19527,
            "Nutzungsidentifikator": "LU_608917",
            "nutzungsart": 852,
            "GEO_ID": 277979,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": 2013,
            "verpflichtung_bis": 2018,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 608917,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.267.0",
            "display1": "852 HeKS (277979) [2.52 a]",
            "display2": "2.52",
            "programme": "",
            "art": "hecken"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1108399",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649382.719,
                    1231297.833
                  ],
                  [
                    2649401.769,
                    1231302.864
                  ],
                  [
                    2649408.247,
                    1231325.402
                  ],
                  [
                    2649391.395,
                    1231317.677
                  ],
                  [
                    2649394.483,
                    1231310.643
                  ],
                  [
                    2649384.693,
                    1231306.067
                  ],
                  [
                    2649383.283,
                    1231309.497
                  ],
                  [
                    2649379.807,
                    1231308.112
                  ],
                  [
                    2649380.58,
                    1231303.239
                  ],
                  [
                    2649381.143,
                    1231301.398
                  ],
                  [
                    2649382.719,
                    1231297.833
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1108399,
            "BWE_ID": 49901,
            "Nutzungsidentifikator": "LU_1108399",
            "nutzungsart": 852,
            "GEO_ID": 1108399,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": 2016,
            "verpflichtung_bis": 2023,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1108399,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1104.716.0",
            "display1": "852 HeKS (1108399) [3.39 a]",
            "display2": "3.39",
            "programme": "",
            "art": "hecken"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1694832",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649591.472,
                    1230147.772
                  ],
                  [
                    2649592.248,
                    1230147.867
                  ],
                  [
                    2649592.983,
                    1230148.087
                  ],
                  [
                    2649593.67,
                    1230148.427
                  ],
                  [
                    2649594.291,
                    1230148.876
                  ],
                  [
                    2649594.829,
                    1230149.423
                  ],
                  [
                    2649595.267,
                    1230150.052
                  ],
                  [
                    2649602.997,
                    1230162.668
                  ],
                  [
                    2649629.557,
                    1230204.033
                  ],
                  [
                    2649647.463,
                    1230237.512
                  ],
                  [
                    2649646.682,
                    1230236.6
                  ],
                  [
                    2649644.777,
                    1230235.648
                  ],
                  [
                    2649641.84,
                    1230234.933
                  ],
                  [
                    2649638.903,
                    1230235.172
                  ],
                  [
                    2649636.442,
                    1230236.6
                  ],
                  [
                    2649634.061,
                    1230238.902
                  ],
                  [
                    2649622.949,
                    1230257.079
                  ],
                  [
                    2649627.87,
                    1230260.73
                  ],
                  [
                    2649627.314,
                    1230261.841
                  ],
                  [
                    2649636.563,
                    1230269.446
                  ],
                  [
                    2649636.492,
                    1230274.539
                  ],
                  [
                    2649636.578,
                    1230276.807
                  ],
                  [
                    2649618.742,
                    1230297.634
                  ],
                  [
                    2649618.477,
                    1230297.402
                  ],
                  [
                    2649599.766,
                    1230325.643
                  ],
                  [
                    2649598.609,
                    1230327.051
                  ],
                  [
                    2649649.031,
                    1230371.008
                  ],
                  [
                    2649637.804,
                    1230383.726
                  ],
                  [
                    2649588.915,
                    1230339.977
                  ],
                  [
                    2649565.525,
                    1230369.087
                  ],
                  [
                    2649540.836,
                    1230326.137
                  ],
                  [
                    2649539.046,
                    1230319.767
                  ],
                  [
                    2649540.576,
                    1230310.497
                  ],
                  [
                    2649549.266,
                    1230284.547
                  ],
                  [
                    2649560.337,
                    1230252.067
                  ],
                  [
                    2649568.327,
                    1230222.097
                  ],
                  [
                    2649585.247,
                    1230165.117
                  ],
                  [
                    2649589.205,
                    1230148.281
                  ],
                  [
                    2649589.928,
                    1230147.983
                  ],
                  [
                    2649590.691,
                    1230147.811
                  ],
                  [
                    2649591.472,
                    1230147.772
                  ]
                ]
              ],
              [
                [
                  [
                    2649631.406,
                    1230053.929
                  ],
                  [
                    2649712.485,
                    1230099.057
                  ],
                  [
                    2649809.715,
                    1230152.924
                  ],
                  [
                    2649877.303,
                    1230189.374
                  ],
                  [
                    2649891.998,
                    1230196.448
                  ],
                  [
                    2649892.199,
                    1230196.579
                  ],
                  [
                    2649892.623,
                    1230197.505
                  ],
                  [
                    2649892.57,
                    1230198.775
                  ],
                  [
                    2649892.014,
                    1230199.992
                  ],
                  [
                    2649889.973,
                    1230201.827
                  ],
                  [
                    2649875.813,
                    1230211.734
                  ],
                  [
                    2649756.108,
                    1230281.159
                  ],
                  [
                    2649753.442,
                    1230281.927
                  ],
                  [
                    2649751.633,
                    1230282.056
                  ],
                  [
                    2649746.158,
                    1230281.997
                  ],
                  [
                    2649744.582,
                    1230282.044
                  ],
                  [
                    2649737.368,
                    1230282.82
                  ],
                  [
                    2649733.995,
                    1230283.052
                  ],
                  [
                    2649730.522,
                    1230282.489
                  ],
                  [
                    2649726.95,
                    1230281.001
                  ],
                  [
                    2649724.437,
                    1230279.447
                  ],
                  [
                    2649721.956,
                    1230276.966
                  ],
                  [
                    2649719.008,
                    1230272.895
                  ],
                  [
                    2649716.867,
                    1230269.353
                  ],
                  [
                    2649751.867,
                    1230245.715
                  ],
                  [
                    2649761.392,
                    1230237.354
                  ],
                  [
                    2649768.165,
                    1230230.051
                  ],
                  [
                    2649772.105,
                    1230225.235
                  ],
                  [
                    2649747.981,
                    1230192.096
                  ],
                  [
                    2649736.17,
                    1230185.83
                  ],
                  [
                    2649730.773,
                    1230184.031
                  ],
                  [
                    2649727.65,
                    1230184.296
                  ],
                  [
                    2649725.195,
                    1230185.257
                  ],
                  [
                    2649672.393,
                    1230226.366
                  ],
                  [
                    2649673.574,
                    1230227.94
                  ],
                  [
                    2649682.935,
                    1230241.386
                  ],
                  [
                    2649677.631,
                    1230245.338
                  ],
                  [
                    2649677.904,
                    1230244.121
                  ],
                  [
                    2649678.018,
                    1230241.418
                  ],
                  [
                    2649677.825,
                    1230240.442
                  ],
                  [
                    2649677.499,
                    1230239.464
                  ],
                  [
                    2649676.599,
                    1230237.691
                  ],
                  [
                    2649675.514,
                    1230236.448
                  ],
                  [
                    2649674.324,
                    1230235.363
                  ],
                  [
                    2649672.683,
                    1230234.49
                  ],
                  [
                    2649670.567,
                    1230233.855
                  ],
                  [
                    2649668.609,
                    1230233.775
                  ],
                  [
                    2649666.995,
                    1230234.172
                  ],
                  [
                    2649665.381,
                    1230234.834
                  ],
                  [
                    2649663.926,
                    1230235.866
                  ],
                  [
                    2649662.444,
                    1230237.559
                  ],
                  [
                    2649661.571,
                    1230239.147
                  ],
                  [
                    2649661.147,
                    1230240.708
                  ],
                  [
                    2649660.936,
                    1230243.036
                  ],
                  [
                    2649656.948,
                    1230242.984
                  ],
                  [
                    2649655.312,
                    1230242.93
                  ],
                  [
                    2649653.212,
                    1230239.682
                  ],
                  [
                    2649652.178,
                    1230238.4
                  ],
                  [
                    2649646.354,
                    1230229.075
                  ],
                  [
                    2649632.146,
                    1230202.512
                  ],
                  [
                    2649605.538,
                    1230161.074
                  ],
                  [
                    2649597.825,
                    1230148.485
                  ],
                  [
                    2649596.178,
                    1230145.283
                  ],
                  [
                    2649594.715,
                    1230141.993
                  ],
                  [
                    2649593.415,
                    1230138.552
                  ],
                  [
                    2649592.317,
                    1230135.042
                  ],
                  [
                    2649593.007,
                    1230132.108
                  ],
                  [
                    2649602.727,
                    1230107.998
                  ],
                  [
                    2649610.546,
                    1230090.478
                  ],
                  [
                    2649624.496,
                    1230054.319
                  ],
                  [
                    2649631.406,
                    1230053.929
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1694832,
            "BWE_ID": 772633,
            "Nutzungsidentifikator": "LU_1694832",
            "nutzungsart": 601,
            "GEO_ID": 1438989,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1694832,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.345.0",
            "display1": "601 KunWie [428.25 a]",
            "display2": "428.25",
            "programme": "",
            "art": "acker"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1907281",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2654151.071,
                    1234084.854
                  ],
                  [
                    2654156.169,
                    1234085.245
                  ],
                  [
                    2654161.864,
                    1234088.578
                  ],
                  [
                    2654185.884,
                    1234103.633
                  ],
                  [
                    2654194.996,
                    1234108.544
                  ],
                  [
                    2654152.267,
                    1234150.663
                  ],
                  [
                    2654109.343,
                    1234193.289
                  ],
                  [
                    2654066.266,
                    1234235.796
                  ],
                  [
                    2654022.192,
                    1234279.226
                  ],
                  [
                    2654000.649,
                    1234300.618
                  ],
                  [
                    2653999.054,
                    1234299.474
                  ],
                  [
                    2653979.102,
                    1234283.691
                  ],
                  [
                    2653970.508,
                    1234274.316
                  ],
                  [
                    2653959.002,
                    1234249.745
                  ],
                  [
                    2653959.483,
                    1234248.092
                  ],
                  [
                    2653965.466,
                    1234240.998
                  ],
                  [
                    2653987.199,
                    1234220.741
                  ],
                  [
                    2654016.717,
                    1234188.162
                  ],
                  [
                    2654040.949,
                    1234166.161
                  ],
                  [
                    2654077.577,
                    1234134.792
                  ],
                  [
                    2654101.837,
                    1234115.18
                  ],
                  [
                    2654133.715,
                    1234096.398
                  ],
                  [
                    2654151.071,
                    1234084.854
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1907281,
            "BWE_ID": 848336,
            "Nutzungsidentifikator": "LU_1907281",
            "nutzungsart": 601,
            "GEO_ID": 1646782,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1907281,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "4135.255.1",
            "display1": "601 KunWie [168.45 a]",
            "display2": "168.45",
            "programme": "",
            "art": "acker"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1907311",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2653959.002,
                    1234249.745
                  ],
                  [
                    2653970.508,
                    1234274.316
                  ],
                  [
                    2653979.102,
                    1234283.691
                  ],
                  [
                    2653999.054,
                    1234299.474
                  ],
                  [
                    2653975.963,
                    1234282.919
                  ],
                  [
                    2653965.457,
                    1234275.292
                  ],
                  [
                    2653953.19,
                    1234263.879
                  ],
                  [
                    2653956.923,
                    1234256.892
                  ],
                  [
                    2653959.002,
                    1234249.745
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1907311,
            "BWE_ID": 848336,
            "Nutzungsidentifikator": "LU_1907311",
            "nutzungsart": 601,
            "GEO_ID": 1646812,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1907311,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "4135.255.1",
            "display1": "601 KunWie [2.34 a]",
            "display2": "2.34",
            "programme": "",
            "art": "acker"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1694851",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2648966.942,
                    1230270.4
                  ],
                  [
                    2648983.814,
                    1230272.174
                  ],
                  [
                    2649173.891,
                    1230343.518
                  ],
                  [
                    2649167.75,
                    1230356.302
                  ],
                  [
                    2649141.05,
                    1230409.532
                  ],
                  [
                    2649114.1,
                    1230463.072
                  ],
                  [
                    2649098.699,
                    1230491.732
                  ],
                  [
                    2649089.243,
                    1230507.258
                  ],
                  [
                    2649074.77,
                    1230496.359
                  ],
                  [
                    2649074.26,
                    1230495.999
                  ],
                  [
                    2649066.811,
                    1230491.322
                  ],
                  [
                    2649066.14,
                    1230490.878
                  ],
                  [
                    2649059.231,
                    1230487.067
                  ],
                  [
                    2649058.772,
                    1230486.851
                  ],
                  [
                    2648915.734,
                    1230419.984
                  ],
                  [
                    2648966.942,
                    1230270.4
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1694851,
            "BWE_ID": 772634,
            "Nutzungsidentifikator": "LU_1694851",
            "nutzungsart": 516,
            "GEO_ID": 1439008,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1694851,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1104.404.0",
            "display1": "516 Dinkel [354.19 a]",
            "display2": "354.19",
            "programme": "",
            "art": "acker"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1125900",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2654076.088,
                    1233980.777
                  ],
                  [
                    2654096.702,
                    1233997.979
                  ],
                  [
                    2654109.839,
                    1234009.774
                  ],
                  [
                    2653954.049,
                    1234034.619
                  ],
                  [
                    2653960.238,
                    1233997.177
                  ],
                  [
                    2654016.41,
                    1233989.205
                  ],
                  [
                    2654076.088,
                    1233980.777
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1125900,
            "BWE_ID": 546077,
            "Nutzungsidentifikator": "LU_1125900",
            "nutzungsart": 516,
            "GEO_ID": 1132261,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1125900,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "4135.236.0",
            "display1": "516 Dinkel [48.06 a]",
            "display2": "48.06",
            "programme": "",
            "art": "acker"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1694847",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649139.673,
                    1230148.563
                  ],
                  [
                    2649153.202,
                    1230150.123
                  ],
                  [
                    2649164.352,
                    1230153.332
                  ],
                  [
                    2649172.332,
                    1230158.142
                  ],
                  [
                    2649177.622,
                    1230165.372
                  ],
                  [
                    2649180.942,
                    1230176.782
                  ],
                  [
                    2649180.122,
                    1230191.632
                  ],
                  [
                    2649173.072,
                    1230237.802
                  ],
                  [
                    2649173.112,
                    1230247.392
                  ],
                  [
                    2649176.601,
                    1230255.282
                  ],
                  [
                    2649183.131,
                    1230260.382
                  ],
                  [
                    2649191.191,
                    1230261.251
                  ],
                  [
                    2649198.581,
                    1230258.581
                  ],
                  [
                    2649205.741,
                    1230251.871
                  ],
                  [
                    2649220.231,
                    1230233.911
                  ],
                  [
                    2649226.281,
                    1230230.491
                  ],
                  [
                    2649193.881,
                    1230301.901
                  ],
                  [
                    2649173.891,
                    1230343.518
                  ],
                  [
                    2648983.814,
                    1230272.174
                  ],
                  [
                    2649011.134,
                    1230212.284
                  ],
                  [
                    2649038.734,
                    1230151.834
                  ],
                  [
                    2649054.084,
                    1230160.054
                  ],
                  [
                    2649071.334,
                    1230165.843
                  ],
                  [
                    2649080.084,
                    1230167.023
                  ],
                  [
                    2649090.003,
                    1230166.913
                  ],
                  [
                    2649097.643,
                    1230165.093
                  ],
                  [
                    2649104.783,
                    1230161.933
                  ],
                  [
                    2649122.073,
                    1230152.633
                  ],
                  [
                    2649130.993,
                    1230149.503
                  ],
                  [
                    2649139.673,
                    1230148.563
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1694847,
            "BWE_ID": 772625,
            "Nutzungsidentifikator": "LU_1694847",
            "nutzungsart": 516,
            "GEO_ID": 1439004,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1694847,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.454.0",
            "display1": "516 Dinkel [277.75 a]",
            "display2": "277.75",
            "programme": "",
            "art": "acker"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1694839",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649532.811,
                    1229965.688
                  ],
                  [
                    2649577.376,
                    1229994.221
                  ],
                  [
                    2649631.555,
                    1230028.839
                  ],
                  [
                    2649622.676,
                    1230045.379
                  ],
                  [
                    2649616.316,
                    1230050.549
                  ],
                  [
                    2649588.516,
                    1230054.859
                  ],
                  [
                    2649565.486,
                    1230058.369
                  ],
                  [
                    2649551.097,
                    1230061.74
                  ],
                  [
                    2649538.417,
                    1230066.96
                  ],
                  [
                    2649525.917,
                    1230074.34
                  ],
                  [
                    2649515.157,
                    1230082.42
                  ],
                  [
                    2649502.238,
                    1230092.819
                  ],
                  [
                    2649488.798,
                    1230102.249
                  ],
                  [
                    2649484.906,
                    1230098.103
                  ],
                  [
                    2649469.448,
                    1230094.943
                  ],
                  [
                    2649503.993,
                    1230027.974
                  ],
                  [
                    2649532.811,
                    1229965.688
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1694839,
            "BWE_ID": 772627,
            "Nutzungsidentifikator": "LU_1694839",
            "nutzungsart": 516,
            "GEO_ID": 1438996,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1694839,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.355.0",
            "display1": "516 Dinkel [93.72 a]",
            "display2": "93.72",
            "programme": "",
            "art": "acker"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1698766",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649469.204,
                    1231134.219
                  ],
                  [
                    2649471.392,
                    1231135.216
                  ],
                  [
                    2649516.64,
                    1231155.859
                  ],
                  [
                    2649570.164,
                    1231180.027
                  ],
                  [
                    2649569.867,
                    1231192.924
                  ],
                  [
                    2649569.276,
                    1231208.644
                  ],
                  [
                    2649571.937,
                    1231240.192
                  ],
                  [
                    2649574.089,
                    1231255.622
                  ],
                  [
                    2649580.611,
                    1231276.285
                  ],
                  [
                    2649578.431,
                    1231288.502
                  ],
                  [
                    2649551.155,
                    1231325.766
                  ],
                  [
                    2649536.178,
                    1231312.08
                  ],
                  [
                    2649528.176,
                    1231304.064
                  ],
                  [
                    2649515.406,
                    1231324.7
                  ],
                  [
                    2649498.617,
                    1231365.529
                  ],
                  [
                    2649493.743,
                    1231370.54
                  ],
                  [
                    2649489.273,
                    1231375.914
                  ],
                  [
                    2649484.984,
                    1231382.02
                  ],
                  [
                    2649481.216,
                    1231388.461
                  ],
                  [
                    2649469.263,
                    1231410.055
                  ],
                  [
                    2649457.205,
                    1231419.859
                  ],
                  [
                    2649450.571,
                    1231421.97
                  ],
                  [
                    2649442.25,
                    1231429.729
                  ],
                  [
                    2649430.086,
                    1231450.645
                  ],
                  [
                    2649415.56,
                    1231481.607
                  ],
                  [
                    2649408.203,
                    1231495.703
                  ],
                  [
                    2649404.003,
                    1231506.437
                  ],
                  [
                    2649399.532,
                    1231517.786
                  ],
                  [
                    2649391.424,
                    1231558.835
                  ],
                  [
                    2649336.166,
                    1231548.281
                  ],
                  [
                    2649321.895,
                    1231545.575
                  ],
                  [
                    2649408.247,
                    1231325.402
                  ],
                  [
                    2649420.508,
                    1231296.094
                  ],
                  [
                    2649457.617,
                    1231235.742
                  ],
                  [
                    2649451.367,
                    1231215.625
                  ],
                  [
                    2649438.477,
                    1231184.961
                  ],
                  [
                    2649430.859,
                    1231177.734
                  ],
                  [
                    2649469.204,
                    1231134.219
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1698766,
            "BWE_ID": 49901,
            "Nutzungsidentifikator": "LU_1698766",
            "nutzungsart": 516,
            "GEO_ID": 1442921,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1698766,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1104.716.0",
            "display1": "516 Dinkel [411.17 a]",
            "display2": "411.17",
            "programme": "",
            "art": "acker"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1907063",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649430.859,
                    1231177.734
                  ],
                  [
                    2649438.477,
                    1231184.961
                  ],
                  [
                    2649451.367,
                    1231215.625
                  ],
                  [
                    2649457.617,
                    1231235.742
                  ],
                  [
                    2649420.508,
                    1231296.094
                  ],
                  [
                    2649413.435,
                    1231313
                  ],
                  [
                    2649408.594,
                    1231296.563
                  ],
                  [
                    2649393.672,
                    1231292.031
                  ],
                  [
                    2649401.953,
                    1231267.266
                  ],
                  [
                    2649403.047,
                    1231260.859
                  ],
                  [
                    2649403.125,
                    1231252.656
                  ],
                  [
                    2649402.422,
                    1231242.813
                  ],
                  [
                    2649417.312,
                    1231209.807
                  ],
                  [
                    2649430.859,
                    1231177.734
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1907063,
            "BWE_ID": 49901,
            "Nutzungsidentifikator": "LU_1907063",
            "nutzungsart": 516,
            "GEO_ID": 1646564,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1907063,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1104.716.0",
            "display1": "516 Dinkel [40.70 a]",
            "display2": "40.70",
            "programme": "",
            "art": "acker"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1694844",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649672.423,
                    1229832.403
                  ],
                  [
                    2649744.792,
                    1229885.391
                  ],
                  [
                    2649745.652,
                    1229889.541
                  ],
                  [
                    2649739.472,
                    1229901.01
                  ],
                  [
                    2649727.673,
                    1229918.87
                  ],
                  [
                    2649716.613,
                    1229933.12
                  ],
                  [
                    2649686.454,
                    1229965.43
                  ],
                  [
                    2649648.615,
                    1230008.489
                  ],
                  [
                    2649631.555,
                    1230028.839
                  ],
                  [
                    2649577.376,
                    1229994.221
                  ],
                  [
                    2649524.586,
                    1229960.422
                  ],
                  [
                    2649556.885,
                    1229911.103
                  ],
                  [
                    2649594.874,
                    1229855.313
                  ],
                  [
                    2649598.724,
                    1229855.433
                  ],
                  [
                    2649607.415,
                    1229844.379
                  ],
                  [
                    2649643.983,
                    1229870.962
                  ],
                  [
                    2649672.423,
                    1229832.403
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1694844,
            "BWE_ID": 19587,
            "Nutzungsidentifikator": "LU_1694844",
            "nutzungsart": 516,
            "GEO_ID": 1439001,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1694844,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.356.0",
            "display1": "516 Dinkel [232.98 a]",
            "display2": "232.98",
            "programme": "",
            "art": "acker"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1694855",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649399.532,
                    1231517.786
                  ],
                  [
                    2649429.013,
                    1231525.289
                  ],
                  [
                    2649419.368,
                    1231575.835
                  ],
                  [
                    2649417.543,
                    1231585.133
                  ],
                  [
                    2649415.937,
                    1231594.472
                  ],
                  [
                    2649414.614,
                    1231603.577
                  ],
                  [
                    2649413.5,
                    1231612.709
                  ],
                  [
                    2649412.284,
                    1231635.09
                  ],
                  [
                    2649411.66,
                    1231641.677
                  ],
                  [
                    2649410.315,
                    1231648.155
                  ],
                  [
                    2649408.224,
                    1231654.189
                  ],
                  [
                    2649405.503,
                    1231659.966
                  ],
                  [
                    2649390.899,
                    1231687.429
                  ],
                  [
                    2649372.95,
                    1231722.917
                  ],
                  [
                    2649348.067,
                    1231761.563
                  ],
                  [
                    2649347.395,
                    1231762.189
                  ],
                  [
                    2649346.63,
                    1231762.694
                  ],
                  [
                    2649345.79,
                    1231763.066
                  ],
                  [
                    2649344.901,
                    1231763.292
                  ],
                  [
                    2649343.987,
                    1231763.368
                  ],
                  [
                    2649343.072,
                    1231763.291
                  ],
                  [
                    2649342.255,
                    1231763.061
                  ],
                  [
                    2649341.482,
                    1231762.708
                  ],
                  [
                    2649340.774,
                    1231762.24
                  ],
                  [
                    2649340.146,
                    1231761.668
                  ],
                  [
                    2649339.613,
                    1231761.007
                  ],
                  [
                    2649339.188,
                    1231760.272
                  ],
                  [
                    2649328.624,
                    1231709.996
                  ],
                  [
                    2649311.734,
                    1231630.219
                  ],
                  [
                    2649313.517,
                    1231630.566
                  ],
                  [
                    2649307.785,
                    1231580.236
                  ],
                  [
                    2649321.178,
                    1231545.451
                  ],
                  [
                    2649336.166,
                    1231548.281
                  ],
                  [
                    2649391.424,
                    1231558.835
                  ],
                  [
                    2649399.532,
                    1231517.786
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1694855,
            "BWE_ID": 49900,
            "Nutzungsidentifikator": "LU_1694855",
            "nutzungsart": 516,
            "GEO_ID": 1439012,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1694855,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1104.714.0",
            "display1": "516 Dinkel [170.64 a]",
            "display2": "170.64",
            "programme": "",
            "art": "acker"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1694813",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649413.997,
                    1229673.548
                  ],
                  [
                    2649460.228,
                    1229695.001
                  ],
                  [
                    2649435.841,
                    1229739.507
                  ],
                  [
                    2649432.251,
                    1229740.806
                  ],
                  [
                    2649432.208,
                    1229740.823
                  ],
                  [
                    2649432.149,
                    1229740.85
                  ],
                  [
                    2649432.091,
                    1229740.88
                  ],
                  [
                    2649432.035,
                    1229740.915
                  ],
                  [
                    2649431.982,
                    1229740.953
                  ],
                  [
                    2649431.932,
                    1229740.995
                  ],
                  [
                    2649431.884,
                    1229741.039
                  ],
                  [
                    2649431.839,
                    1229741.087
                  ],
                  [
                    2649431.798,
                    1229741.138
                  ],
                  [
                    2649431.76,
                    1229741.191
                  ],
                  [
                    2649431.725,
                    1229741.246
                  ],
                  [
                    2649431.694,
                    1229741.304
                  ],
                  [
                    2649431.667,
                    1229741.364
                  ],
                  [
                    2649431.657,
                    1229741.39
                  ],
                  [
                    2649429.065,
                    1229745.998
                  ],
                  [
                    2649428.265,
                    1229750.274
                  ],
                  [
                    2649428.252,
                    1229750.31
                  ],
                  [
                    2649428.233,
                    1229750.372
                  ],
                  [
                    2649428.218,
                    1229750.436
                  ],
                  [
                    2649428.207,
                    1229750.501
                  ],
                  [
                    2649428.201,
                    1229750.566
                  ],
                  [
                    2649428.199,
                    1229750.664
                  ],
                  [
                    2649422.735,
                    1229750.312
                  ],
                  [
                    2649416.554,
                    1229749.933
                  ],
                  [
                    2649412.643,
                    1229751.699
                  ],
                  [
                    2649406.714,
                    1229762.422
                  ],
                  [
                    2649401.747,
                    1229778.117
                  ],
                  [
                    2649396.265,
                    1229781.667
                  ],
                  [
                    2649385.465,
                    1229785.357
                  ],
                  [
                    2649366.516,
                    1229788.987
                  ],
                  [
                    2649355.286,
                    1229792.438
                  ],
                  [
                    2649345.226,
                    1229796.268
                  ],
                  [
                    2649341.246,
                    1229794.708
                  ],
                  [
                    2649393.945,
                    1229684.57
                  ],
                  [
                    2649405.273,
                    1229689.844
                  ],
                  [
                    2649413.997,
                    1229673.548
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1694813,
            "BWE_ID": 19527,
            "Nutzungsidentifikator": "LU_1694813",
            "nutzungsart": 516,
            "GEO_ID": 1438970,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1694813,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.267.0",
            "display1": "516 Dinkel [64.98 a]",
            "display2": "64.98",
            "programme": "",
            "art": "acker"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1694849",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649234.165,
                    1229571.614
                  ],
                  [
                    2649317.844,
                    1229606.632
                  ],
                  [
                    2649367.666,
                    1229627.47
                  ],
                  [
                    2649361.161,
                    1229645.553
                  ],
                  [
                    2649355.371,
                    1229664.355
                  ],
                  [
                    2649367.746,
                    1229670.086
                  ],
                  [
                    2649384.901,
                    1229677.989
                  ],
                  [
                    2649389.224,
                    1229679.896
                  ],
                  [
                    2649365.345,
                    1229729.109
                  ],
                  [
                    2649329.536,
                    1229804.058
                  ],
                  [
                    2649323.316,
                    1229811.878
                  ],
                  [
                    2649313.207,
                    1229821.377
                  ],
                  [
                    2649306.937,
                    1229824.067
                  ],
                  [
                    2649302.767,
                    1229823.727
                  ],
                  [
                    2649155.568,
                    1229770.72
                  ],
                  [
                    2649153.338,
                    1229764.091
                  ],
                  [
                    2649191.297,
                    1229673.502
                  ],
                  [
                    2649218.395,
                    1229608.993
                  ],
                  [
                    2649234.165,
                    1229571.614
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1694849,
            "BWE_ID": 19657,
            "Nutzungsidentifikator": "LU_1694849",
            "nutzungsart": 516,
            "GEO_ID": 1439006,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1694849,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.460.0",
            "display1": "516 Dinkel [363.78 a]",
            "display2": "363.78",
            "programme": "",
            "art": "acker"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1694856",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649401.467,
                    1230660.51
                  ],
                  [
                    2649413.646,
                    1230669.54
                  ],
                  [
                    2649414.093,
                    1230668.938
                  ],
                  [
                    2649437.213,
                    1230690.808
                  ],
                  [
                    2649461.502,
                    1230713.797
                  ],
                  [
                    2649473.022,
                    1230734.037
                  ],
                  [
                    2649447.357,
                    1230774.081
                  ],
                  [
                    2649364.153,
                    1230903.043
                  ],
                  [
                    2649362.942,
                    1230902.153
                  ],
                  [
                    2649334.168,
                    1230946.753
                  ],
                  [
                    2649331.781,
                    1230952.038
                  ],
                  [
                    2649322.664,
                    1230935.574
                  ],
                  [
                    2649313.431,
                    1230927.996
                  ],
                  [
                    2649300.533,
                    1230923.036
                  ],
                  [
                    2649303.097,
                    1230909.548
                  ],
                  [
                    2649304.435,
                    1230900.917
                  ],
                  [
                    2649305.458,
                    1230892.244
                  ],
                  [
                    2649306.146,
                    1230883.788
                  ],
                  [
                    2649306.534,
                    1230875.312
                  ],
                  [
                    2649308.937,
                    1230831.179
                  ],
                  [
                    2649309.244,
                    1230824.857
                  ],
                  [
                    2649310.016,
                    1230818.574
                  ],
                  [
                    2649311.247,
                    1230812.365
                  ],
                  [
                    2649313.088,
                    1230805.98
                  ],
                  [
                    2649315.416,
                    1230799.755
                  ],
                  [
                    2649318.218,
                    1230793.729
                  ],
                  [
                    2649322.435,
                    1230784.667
                  ],
                  [
                    2649327.357,
                    1230775.967
                  ],
                  [
                    2649332.934,
                    1230767.87
                  ],
                  [
                    2649339.126,
                    1230760.232
                  ],
                  [
                    2649388.804,
                    1230704.3
                  ],
                  [
                    2649404.601,
                    1230686.22
                  ],
                  [
                    2649406.149,
                    1230683.967
                  ],
                  [
                    2649407.316,
                    1230681.495
                  ],
                  [
                    2649408.071,
                    1230678.868
                  ],
                  [
                    2649408.395,
                    1230676.153
                  ],
                  [
                    2649408.279,
                    1230673.422
                  ],
                  [
                    2649407.657,
                    1230670.576
                  ],
                  [
                    2649406.558,
                    1230667.878
                  ],
                  [
                    2649405.014,
                    1230665.407
                  ],
                  [
                    2649403.072,
                    1230663.236
                  ],
                  [
                    2649400.787,
                    1230661.428
                  ],
                  [
                    2649401.467,
                    1230660.51
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1694856,
            "BWE_ID": 49920,
            "Nutzungsidentifikator": "LU_1694856",
            "nutzungsart": 527,
            "GEO_ID": 1439013,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": true,
            "lq_bemerkungen": null,
            "id_nutzung": 1694856,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1104.740.0",
            "display1": "527 WinRaSp [222.10 a]",
            "display2": "222.10",
            "programme": "",
            "art": "acker"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1698767",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649347.073,
                    1231120.847
                  ],
                  [
                    2649382.184,
                    1231149.258
                  ],
                  [
                    2649382.744,
                    1231150.743
                  ],
                  [
                    2649383.117,
                    1231152.637
                  ],
                  [
                    2649384.293,
                    1231180.63
                  ],
                  [
                    2649386.08,
                    1231209.814
                  ],
                  [
                    2649390.993,
                    1231235.466
                  ],
                  [
                    2649392.087,
                    1231242.168
                  ],
                  [
                    2649392.425,
                    1231248.95
                  ],
                  [
                    2649392.169,
                    1231254.13
                  ],
                  [
                    2649391.472,
                    1231259.269
                  ],
                  [
                    2649390.339,
                    1231264.33
                  ],
                  [
                    2649380.398,
                    1231296.87
                  ],
                  [
                    2649378.814,
                    1231300.488
                  ],
                  [
                    2649377.774,
                    1231304.298
                  ],
                  [
                    2649377.299,
                    1231308.219
                  ],
                  [
                    2649377.401,
                    1231312.167
                  ],
                  [
                    2649378.142,
                    1231316.316
                  ],
                  [
                    2649379.519,
                    1231320.299
                  ],
                  [
                    2649380.908,
                    1231324.54
                  ],
                  [
                    2649382.155,
                    1231327.781
                  ],
                  [
                    2649383.207,
                    1231331.092
                  ],
                  [
                    2649384.565,
                    1231336.425
                  ],
                  [
                    2649381.687,
                    1231339.498
                  ],
                  [
                    2649374.703,
                    1231357.57
                  ],
                  [
                    2649368.996,
                    1231372.453
                  ],
                  [
                    2649359.136,
                    1231392.508
                  ],
                  [
                    2649349.42,
                    1231402.421
                  ],
                  [
                    2649339.006,
                    1231405.711
                  ],
                  [
                    2649334.447,
                    1231410.327
                  ],
                  [
                    2649321.662,
                    1231438.231
                  ],
                  [
                    2649309.177,
                    1231473.605
                  ],
                  [
                    2649300.395,
                    1231500.547
                  ],
                  [
                    2649296.907,
                    1231513.453
                  ],
                  [
                    2649288.716,
                    1231514.9
                  ],
                  [
                    2649288.7,
                    1231514.751
                  ],
                  [
                    2649287.678,
                    1231502.159
                  ],
                  [
                    2649287.307,
                    1231489.38
                  ],
                  [
                    2649288.51,
                    1231449.211
                  ],
                  [
                    2649288.775,
                    1231442.151
                  ],
                  [
                    2649288.509,
                    1231435.091
                  ],
                  [
                    2649287.714,
                    1231428.071
                  ],
                  [
                    2649286.393,
                    1231421.131
                  ],
                  [
                    2649284.363,
                    1231413.879
                  ],
                  [
                    2649281.759,
                    1231406.812
                  ],
                  [
                    2649278.597,
                    1231399.977
                  ],
                  [
                    2649274.898,
                    1231393.417
                  ],
                  [
                    2649269.938,
                    1231385.264
                  ],
                  [
                    2649267.435,
                    1231380.581
                  ],
                  [
                    2649265.386,
                    1231375.683
                  ],
                  [
                    2649263.81,
                    1231370.612
                  ],
                  [
                    2649262.722,
                    1231365.415
                  ],
                  [
                    2649262.35,
                    1231360.296
                  ],
                  [
                    2649262.448,
                    1231355.166
                  ],
                  [
                    2649263.015,
                    1231350.065
                  ],
                  [
                    2649264.046,
                    1231345.038
                  ],
                  [
                    2649269.941,
                    1231320.323
                  ],
                  [
                    2649283.255,
                    1231265.266
                  ],
                  [
                    2649284.842,
                    1231260.404
                  ],
                  [
                    2649285.702,
                    1231255.362
                  ],
                  [
                    2649285.657,
                    1231251.85
                  ],
                  [
                    2649285.139,
                    1231248.376
                  ],
                  [
                    2649284.157,
                    1231245.003
                  ],
                  [
                    2649283.25,
                    1231242.707
                  ],
                  [
                    2649284.613,
                    1231241.981
                  ],
                  [
                    2649286.548,
                    1231240.938
                  ],
                  [
                    2649285.31,
                    1231238.642
                  ],
                  [
                    2649285.272,
                    1231238.662
                  ],
                  [
                    2649285.208,
                    1231238.549
                  ],
                  [
                    2649281.842,
                    1231234.702
                  ],
                  [
                    2649275.458,
                    1231230.286
                  ],
                  [
                    2649270.605,
                    1231227.139
                  ],
                  [
                    2649267.545,
                    1231223.816
                  ],
                  [
                    2649267.282,
                    1231221.193
                  ],
                  [
                    2649305.259,
                    1231170.69
                  ],
                  [
                    2649347.073,
                    1231120.847
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1698767,
            "BWE_ID": 49901,
            "Nutzungsidentifikator": "LU_1698767",
            "nutzungsart": 527,
            "GEO_ID": 1442922,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": true,
            "lq_bemerkungen": null,
            "id_nutzung": 1698767,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1104.716.0",
            "display1": "527 WinRaSp [297.41 a]",
            "display2": "297.41",
            "programme": "",
            "art": "acker"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1694821",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2650192.046,
                    1230114.389
                  ],
                  [
                    2650193.277,
                    1230116.172
                  ],
                  [
                    2650214.775,
                    1230133.628
                  ],
                  [
                    2650234.777,
                    1230149.018
                  ],
                  [
                    2650240.012,
                    1230148.852
                  ],
                  [
                    2650256.8,
                    1230170.128
                  ],
                  [
                    2650263.571,
                    1230182.838
                  ],
                  [
                    2650269.401,
                    1230202.037
                  ],
                  [
                    2650271.671,
                    1230219.537
                  ],
                  [
                    2650253.601,
                    1230232.197
                  ],
                  [
                    2650212.87,
                    1230260.357
                  ],
                  [
                    2650171.01,
                    1230289.238
                  ],
                  [
                    2650207.402,
                    1230326.076
                  ],
                  [
                    2650180.361,
                    1230344.647
                  ],
                  [
                    2650163.131,
                    1230354.607
                  ],
                  [
                    2650141.591,
                    1230364.107
                  ],
                  [
                    2650122.99,
                    1230370.028
                  ],
                  [
                    2650100.45,
                    1230374.408
                  ],
                  [
                    2650075.379,
                    1230376.869
                  ],
                  [
                    2650021.998,
                    1230381.34
                  ],
                  [
                    2650088.238,
                    1230324.659
                  ],
                  [
                    2650050.526,
                    1230290.18
                  ],
                  [
                    2650043.433,
                    1230283.705
                  ],
                  [
                    2650068.802,
                    1230271.029
                  ],
                  [
                    2650082.489,
                    1230245.825
                  ],
                  [
                    2650100.863,
                    1230206.794
                  ],
                  [
                    2650120.738,
                    1230174.247
                  ],
                  [
                    2650149.676,
                    1230144.716
                  ],
                  [
                    2650192.046,
                    1230114.389
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1694821,
            "BWE_ID": 772630,
            "Nutzungsidentifikator": "LU_1694821",
            "nutzungsart": 527,
            "GEO_ID": 1438978,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": true,
            "lq_bemerkungen": null,
            "id_nutzung": 1694821,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.333.0",
            "display1": "527 WinRaSp [318.42 a]",
            "display2": "318.42",
            "programme": "",
            "art": "acker"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1698756",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2650151.666,
                    1230068.552
                  ],
                  [
                    2650164.546,
                    1230082.471
                  ],
                  [
                    2650182.436,
                    1230095.831
                  ],
                  [
                    2650186.332,
                    1230106.118
                  ],
                  [
                    2650192.046,
                    1230114.389
                  ],
                  [
                    2650149.676,
                    1230144.716
                  ],
                  [
                    2650120.738,
                    1230174.247
                  ],
                  [
                    2650100.863,
                    1230206.794
                  ],
                  [
                    2650082.489,
                    1230245.825
                  ],
                  [
                    2650068.802,
                    1230271.029
                  ],
                  [
                    2650043.433,
                    1230283.705
                  ],
                  [
                    2649995.884,
                    1230240.292
                  ],
                  [
                    2650113.036,
                    1230105.194
                  ],
                  [
                    2650149.472,
                    1230069.45
                  ],
                  [
                    2650151.666,
                    1230068.552
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1698756,
            "BWE_ID": 772631,
            "Nutzungsidentifikator": "LU_1698756",
            "nutzungsart": 527,
            "GEO_ID": 1442911,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": true,
            "lq_bemerkungen": null,
            "id_nutzung": 1698756,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.333.1",
            "display1": "527 WinRaSp [139.19 a]",
            "display2": "139.19",
            "programme": "",
            "art": "acker"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1698759",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2650022.633,
                    1229998.365
                  ],
                  [
                    2650092.293,
                    1230007.193
                  ],
                  [
                    2650089.363,
                    1230127.575
                  ],
                  [
                    2650041.786,
                    1230182.44
                  ],
                  [
                    2650025.467,
                    1230201.963
                  ],
                  [
                    2650019.353,
                    1230209.09
                  ],
                  [
                    2650006.242,
                    1230224.31
                  ],
                  [
                    2649996.265,
                    1230234.934
                  ],
                  [
                    2649993.35,
                    1230233.962
                  ],
                  [
                    2649994.383,
                    1230228.562
                  ],
                  [
                    2649994.786,
                    1230217.732
                  ],
                  [
                    2650000.195,
                    1230176.953
                  ],
                  [
                    2649999.023,
                    1230143.164
                  ],
                  [
                    2650000,
                    1230110.938
                  ],
                  [
                    2650009.375,
                    1230032.031
                  ],
                  [
                    2650008.546,
                    1230022.983
                  ],
                  [
                    2650011.652,
                    1230004.415
                  ],
                  [
                    2650015.923,
                    1229999.755
                  ],
                  [
                    2650022.633,
                    1229998.365
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1698759,
            "BWE_ID": 772631,
            "Nutzungsidentifikator": "LU_1698759",
            "nutzungsart": 527,
            "GEO_ID": 1442914,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": true,
            "lq_bemerkungen": null,
            "id_nutzung": 1698759,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.333.1",
            "display1": "527 WinRaSp [155.62 a]",
            "display2": "155.62",
            "programme": "",
            "art": "acker"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1698760",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2650097.186,
                    1229721.539
                  ],
                  [
                    2650145.337,
                    1229744.368
                  ],
                  [
                    2650159.127,
                    1229752.578
                  ],
                  [
                    2650169.587,
                    1229761.998
                  ],
                  [
                    2650179.368,
                    1229773.837
                  ],
                  [
                    2650187.408,
                    1229786.277
                  ],
                  [
                    2650195.522,
                    1229825.411
                  ],
                  [
                    2650203.241,
                    1229837.462
                  ],
                  [
                    2650219.454,
                    1229858.707
                  ],
                  [
                    2650237.384,
                    1229875.493
                  ],
                  [
                    2650258.44,
                    1229889.819
                  ],
                  [
                    2650270.436,
                    1229897.691
                  ],
                  [
                    2650282.432,
                    1229908.562
                  ],
                  [
                    2650297.427,
                    1229921.681
                  ],
                  [
                    2650299.785,
                    1229925.035
                  ],
                  [
                    2650108.193,
                    1230005.549
                  ],
                  [
                    2650023.273,
                    1229994.785
                  ],
                  [
                    2650018.923,
                    1229993.495
                  ],
                  [
                    2650014.453,
                    1229987.725
                  ],
                  [
                    2650033.074,
                    1229875.637
                  ],
                  [
                    2650035.364,
                    1229875.977
                  ],
                  [
                    2650036.384,
                    1229869.777
                  ],
                  [
                    2650034.124,
                    1229869.397
                  ],
                  [
                    2650038.026,
                    1229846.197
                  ],
                  [
                    2650045.632,
                    1229845.419
                  ],
                  [
                    2650051.385,
                    1229807.455
                  ],
                  [
                    2650058.816,
                    1229784.08
                  ],
                  [
                    2650065.412,
                    1229768.197
                  ],
                  [
                    2650072.094,
                    1229756.07
                  ],
                  [
                    2650086.666,
                    1229735.745
                  ],
                  [
                    2650093.186,
                    1229726.925
                  ],
                  [
                    2650097.186,
                    1229721.539
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1698760,
            "BWE_ID": 772632,
            "Nutzungsidentifikator": "LU_1698760",
            "nutzungsart": 527,
            "GEO_ID": 1442915,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": true,
            "lq_bemerkungen": null,
            "id_nutzung": 1698760,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.336.1",
            "display1": "527 WinRaSp [455.43 a]",
            "display2": "455.43",
            "programme": "",
            "art": "acker"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1694279",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2650187.408,
                    1229786.277
                  ],
                  [
                    2650194.608,
                    1229801.426
                  ],
                  [
                    2650202.058,
                    1229825.046
                  ],
                  [
                    2650208.478,
                    1229834.835
                  ],
                  [
                    2650220.999,
                    1229842.075
                  ],
                  [
                    2650238.375,
                    1229863.453
                  ],
                  [
                    2650243.967,
                    1229873.484
                  ],
                  [
                    2650266.163,
                    1229878.974
                  ],
                  [
                    2650278.239,
                    1229885.712
                  ],
                  [
                    2650284.676,
                    1229892.807
                  ],
                  [
                    2650312.005,
                    1229914.716
                  ],
                  [
                    2650318.306,
                    1229930.005
                  ],
                  [
                    2650330.991,
                    1229951.551
                  ],
                  [
                    2650319.725,
                    1229957.25
                  ],
                  [
                    2650307.42,
                    1229936.351
                  ],
                  [
                    2650306.656,
                    1229934.806
                  ],
                  [
                    2650297.427,
                    1229921.681
                  ],
                  [
                    2650282.432,
                    1229908.562
                  ],
                  [
                    2650270.436,
                    1229897.691
                  ],
                  [
                    2650258.44,
                    1229889.819
                  ],
                  [
                    2650237.384,
                    1229875.493
                  ],
                  [
                    2650219.454,
                    1229858.707
                  ],
                  [
                    2650203.241,
                    1229837.462
                  ],
                  [
                    2650195.522,
                    1229825.411
                  ],
                  [
                    2650187.408,
                    1229786.277
                  ]
                ]
              ],
              [
                [
                  [
                    2650090.036,
                    1229720.74
                  ],
                  [
                    2650097.186,
                    1229721.539
                  ],
                  [
                    2650093.186,
                    1229726.925
                  ],
                  [
                    2650086.666,
                    1229735.745
                  ],
                  [
                    2650072.094,
                    1229756.07
                  ],
                  [
                    2650065.412,
                    1229768.197
                  ],
                  [
                    2650058.816,
                    1229784.08
                  ],
                  [
                    2650051.385,
                    1229807.455
                  ],
                  [
                    2650045.632,
                    1229845.419
                  ],
                  [
                    2650038.026,
                    1229846.197
                  ],
                  [
                    2650042.514,
                    1229819.518
                  ],
                  [
                    2650045.014,
                    1229807.028
                  ],
                  [
                    2650048.094,
                    1229794.819
                  ],
                  [
                    2650052.475,
                    1229781.619
                  ],
                  [
                    2650058.005,
                    1229768.379
                  ],
                  [
                    2650066.045,
                    1229752.999
                  ],
                  [
                    2650073.695,
                    1229740.639
                  ],
                  [
                    2650081.755,
                    1229728.819
                  ],
                  [
                    2650083.725,
                    1229730.049
                  ],
                  [
                    2650087.186,
                    1229724.81
                  ],
                  [
                    2650085.275,
                    1229723.54
                  ],
                  [
                    2650090.036,
                    1229720.74
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1694279,
            "BWE_ID": 772632,
            "Nutzungsidentifikator": "LU_1694279",
            "nutzungsart": 611,
            "GEO_ID": 1438436,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": 2018,
            "verpflichtung_bis": 2025,
            "schnittzeitpunkt": "15. Juni",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1694279,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.336.1",
            "display1": "611 ExWie (1438436) [32.08 a]",
            "display2": "32.08",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1694276",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2650182.436,
                    1230095.831
                  ],
                  [
                    2650194.057,
                    1230101.74
                  ],
                  [
                    2650204.197,
                    1230104.76
                  ],
                  [
                    2650206.273,
                    1230105.547
                  ],
                  [
                    2650196.74,
                    1230111.029
                  ],
                  [
                    2650192.046,
                    1230114.389
                  ],
                  [
                    2650186.332,
                    1230106.118
                  ],
                  [
                    2650182.436,
                    1230095.831
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1694276,
            "BWE_ID": 772631,
            "Nutzungsidentifikator": "LU_1694276",
            "nutzungsart": 611,
            "GEO_ID": 1438433,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": 2018,
            "verpflichtung_bis": 2025,
            "schnittzeitpunkt": "15. Juni",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1694276,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.333.1",
            "display1": "611 ExWie (1438433) [1.72 a]",
            "display2": "1.72",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1694277",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2650008.546,
                    1230022.983
                  ],
                  [
                    2650009.375,
                    1230032.031
                  ],
                  [
                    2650000,
                    1230110.938
                  ],
                  [
                    2649999.023,
                    1230143.164
                  ],
                  [
                    2650000.195,
                    1230176.953
                  ],
                  [
                    2649994.786,
                    1230217.732
                  ],
                  [
                    2649995.373,
                    1230201.932
                  ],
                  [
                    2649994.412,
                    1230146.942
                  ],
                  [
                    2649994.642,
                    1230127.253
                  ],
                  [
                    2649995.682,
                    1230108.453
                  ],
                  [
                    2649999.372,
                    1230078.004
                  ],
                  [
                    2650008.546,
                    1230022.983
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1694277,
            "BWE_ID": 772631,
            "Nutzungsidentifikator": "LU_1694277",
            "nutzungsart": 611,
            "GEO_ID": 1438434,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": 2018,
            "verpflichtung_bis": 2025,
            "schnittzeitpunkt": "15. Juni",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1694277,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.333.1",
            "display1": "611 ExWie (1438434) [7.34 a]",
            "display2": "7.34",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1694273",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2650206.273,
                    1230105.547
                  ],
                  [
                    2650214.968,
                    1230108.84
                  ],
                  [
                    2650221.888,
                    1230116.72
                  ],
                  [
                    2650227.058,
                    1230126.669
                  ],
                  [
                    2650235.039,
                    1230142.549
                  ],
                  [
                    2650240.012,
                    1230148.852
                  ],
                  [
                    2650234.777,
                    1230149.018
                  ],
                  [
                    2650214.775,
                    1230133.628
                  ],
                  [
                    2650193.277,
                    1230116.172
                  ],
                  [
                    2650192.046,
                    1230114.389
                  ],
                  [
                    2650196.74,
                    1230111.029
                  ],
                  [
                    2650206.273,
                    1230105.547
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1694273,
            "BWE_ID": 772630,
            "Nutzungsidentifikator": "LU_1694273",
            "nutzungsart": 611,
            "GEO_ID": 1438430,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": 2018,
            "verpflichtung_bis": 2025,
            "schnittzeitpunkt": "15. Juni",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1694273,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.333.0",
            "display1": "611 ExWie (1438430) [7.32 a]",
            "display2": "7.32",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.220534",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649349.759,
                    1231077.785
                  ],
                  [
                    2649371.049,
                    1231091.382
                  ],
                  [
                    2649362.359,
                    1231097.446
                  ],
                  [
                    2649314.946,
                    1231133.863
                  ],
                  [
                    2649303.352,
                    1231143.369
                  ],
                  [
                    2649292.599,
                    1231153.205
                  ],
                  [
                    2649291.193,
                    1231143.049
                  ],
                  [
                    2649291.329,
                    1231135.691
                  ],
                  [
                    2649308.83,
                    1231115.718
                  ],
                  [
                    2649333.634,
                    1231094.607
                  ],
                  [
                    2649349.759,
                    1231077.785
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 220534,
            "BWE_ID": 49918,
            "Nutzungsidentifikator": "LU_220534",
            "nutzungsart": 611,
            "GEO_ID": 220534,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": 2010,
            "verpflichtung_bis": 2015,
            "schnittzeitpunkt": "15. Juni",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 220534,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1104.737.0",
            "display1": "611 ExWie (220534) [16.96 a]",
            "display2": "16.96",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1694286",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2648915.734,
                    1230419.984
                  ],
                  [
                    2649058.772,
                    1230486.851
                  ],
                  [
                    2649059.231,
                    1230487.067
                  ],
                  [
                    2649066.14,
                    1230490.878
                  ],
                  [
                    2649066.811,
                    1230491.322
                  ],
                  [
                    2649074.26,
                    1230495.999
                  ],
                  [
                    2649074.77,
                    1230496.359
                  ],
                  [
                    2649089.243,
                    1230507.258
                  ],
                  [
                    2649084.489,
                    1230515.062
                  ],
                  [
                    2649079.586,
                    1230509.074
                  ],
                  [
                    2649080.205,
                    1230508.288
                  ],
                  [
                    2649071.054,
                    1230501.07
                  ],
                  [
                    2649062.94,
                    1230495.942
                  ],
                  [
                    2649056.715,
                    1230492.499
                  ],
                  [
                    2648917.351,
                    1230427.952
                  ],
                  [
                    2648916.93,
                    1230428.86
                  ],
                  [
                    2648913.275,
                    1230427.167
                  ],
                  [
                    2648914.878,
                    1230422.486
                  ],
                  [
                    2648915.136,
                    1230422.342
                  ],
                  [
                    2648915.368,
                    1230422.159
                  ],
                  [
                    2648915.567,
                    1230421.94
                  ],
                  [
                    2648915.728,
                    1230421.691
                  ],
                  [
                    2648915.846,
                    1230421.42
                  ],
                  [
                    2648915.919,
                    1230421.133
                  ],
                  [
                    2648915.944,
                    1230420.839
                  ],
                  [
                    2648915.921,
                    1230420.544
                  ],
                  [
                    2648915.85,
                    1230420.256
                  ],
                  [
                    2648915.734,
                    1230419.984
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1694286,
            "BWE_ID": 772634,
            "Nutzungsidentifikator": "LU_1694286",
            "nutzungsart": 611,
            "GEO_ID": 1438443,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": 2018,
            "verpflichtung_bis": 2025,
            "schnittzeitpunkt": "15. Juni",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1694286,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1104.404.0",
            "display1": "611 ExWie (1438443) [12.26 a]",
            "display2": "12.26",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1694361",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2650149.861,
                    1229734.668
                  ],
                  [
                    2650161.806,
                    1229739.481
                  ],
                  [
                    2650166.181,
                    1229741.384
                  ],
                  [
                    2650176.212,
                    1229750.977
                  ],
                  [
                    2650190.578,
                    1229784.487
                  ],
                  [
                    2650182.208,
                    1229771.607
                  ],
                  [
                    2650172.288,
                    1229759.558
                  ],
                  [
                    2650161.337,
                    1229749.728
                  ],
                  [
                    2650146.827,
                    1229741.078
                  ],
                  [
                    2650139.72,
                    1229737.72
                  ],
                  [
                    2650149.861,
                    1229734.668
                  ]
                ]
              ],
              [
                [
                  [
                    2650095.686,
                    1229702.29
                  ],
                  [
                    2650101.646,
                    1229705.667
                  ],
                  [
                    2650101.051,
                    1229706.788
                  ],
                  [
                    2650099.784,
                    1229714.492
                  ],
                  [
                    2650121.86,
                    1229724.553
                  ],
                  [
                    2650121.312,
                    1229729.022
                  ],
                  [
                    2650098.726,
                    1229718.349
                  ],
                  [
                    2650095.446,
                    1229714.85
                  ],
                  [
                    2650093.306,
                    1229708.92
                  ],
                  [
                    2650095.686,
                    1229702.29
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1694361,
            "BWE_ID": 772644,
            "Nutzungsidentifikator": "LU_1694361",
            "nutzungsart": 611,
            "GEO_ID": 1438518,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": 2018,
            "verpflichtung_bis": 2025,
            "schnittzeitpunkt": "15. Juni",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1694361,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.338.0",
            "display1": "611 ExWie (1438518) [5.97 a]",
            "display2": "5.97",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1694283",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649676.717,
                    1230315.195
                  ],
                  [
                    2649679.495,
                    1230319.031
                  ],
                  [
                    2649682.273,
                    1230320.486
                  ],
                  [
                    2649684.39,
                    1230323.661
                  ],
                  [
                    2649686.109,
                    1230326.969
                  ],
                  [
                    2649686.491,
                    1230329.169
                  ],
                  [
                    2649682.451,
                    1230333.591
                  ],
                  [
                    2649678.172,
                    1230335.303
                  ],
                  [
                    2649674.336,
                    1230334.642
                  ],
                  [
                    2649671.425,
                    1230332.922
                  ],
                  [
                    2649669.176,
                    1230328.292
                  ],
                  [
                    2649667.721,
                    1230324.323
                  ],
                  [
                    2649668.383,
                    1230321.016
                  ],
                  [
                    2649670.367,
                    1230318.899
                  ],
                  [
                    2649676.717,
                    1230315.195
                  ]
                ]
              ],
              [
                [
                  [
                    2649618.477,
                    1230297.402
                  ],
                  [
                    2649628.485,
                    1230306.131
                  ],
                  [
                    2649631.676,
                    1230302.788
                  ],
                  [
                    2649636.504,
                    1230307.22
                  ],
                  [
                    2649633.756,
                    1230310.388
                  ],
                  [
                    2649639.662,
                    1230315.839
                  ],
                  [
                    2649639.084,
                    1230318.422
                  ],
                  [
                    2649632.289,
                    1230326.08
                  ],
                  [
                    2649647.133,
                    1230340.784
                  ],
                  [
                    2649651.26,
                    1230336.656
                  ],
                  [
                    2649653.76,
                    1230339.633
                  ],
                  [
                    2649657.841,
                    1230335.516
                  ],
                  [
                    2649664.419,
                    1230327.461
                  ],
                  [
                    2649670.954,
                    1230340.386
                  ],
                  [
                    2649671.589,
                    1230342.086
                  ],
                  [
                    2649671.701,
                    1230343.083
                  ],
                  [
                    2649671.52,
                    1230344.317
                  ],
                  [
                    2649671.382,
                    1230344.717
                  ],
                  [
                    2649668.704,
                    1230348.723
                  ],
                  [
                    2649649.031,
                    1230371.008
                  ],
                  [
                    2649598.609,
                    1230327.051
                  ],
                  [
                    2649599.766,
                    1230325.643
                  ],
                  [
                    2649618.477,
                    1230297.402
                  ]
                ]
              ],
              [
                [
                  [
                    2649741.971,
                    1230285.915
                  ],
                  [
                    2649744.088,
                    1230285.955
                  ],
                  [
                    2649744.644,
                    1230286.193
                  ],
                  [
                    2649744.882,
                    1230286.616
                  ],
                  [
                    2649744.855,
                    1230287.185
                  ],
                  [
                    2649744.458,
                    1230287.701
                  ],
                  [
                    2649742.342,
                    1230289.155
                  ],
                  [
                    2649715.744,
                    1230304.605
                  ],
                  [
                    2649701.514,
                    1230314.915
                  ],
                  [
                    2649693.711,
                    1230322.131
                  ],
                  [
                    2649692.554,
                    1230322.089
                  ],
                  [
                    2649692.304,
                    1230321.871
                  ],
                  [
                    2649692.206,
                    1230321.342
                  ],
                  [
                    2649692.505,
                    1230320.388
                  ],
                  [
                    2649692.992,
                    1230319.49
                  ],
                  [
                    2649696.043,
                    1230315.311
                  ],
                  [
                    2649698.113,
                    1230313.439
                  ],
                  [
                    2649703.663,
                    1230309.568
                  ],
                  [
                    2649706.446,
                    1230305.903
                  ],
                  [
                    2649706.887,
                    1230305.504
                  ],
                  [
                    2649707.907,
                    1230304.66
                  ],
                  [
                    2649718.4,
                    1230296.551
                  ],
                  [
                    2649724.42,
                    1230291.788
                  ],
                  [
                    2649726.503,
                    1230290.531
                  ],
                  [
                    2649733.17,
                    1230287.77
                  ],
                  [
                    2649734.02,
                    1230287.472
                  ],
                  [
                    2649737.354,
                    1230286.55
                  ],
                  [
                    2649741.971,
                    1230285.915
                  ]
                ]
              ],
              [
                [
                  [
                    2649695.238,
                    1230265.056
                  ],
                  [
                    2649697.355,
                    1230268.363
                  ],
                  [
                    2649676.453,
                    1230283.842
                  ],
                  [
                    2649676.366,
                    1230283.834
                  ],
                  [
                    2649673.714,
                    1230280.19
                  ],
                  [
                    2649682.009,
                    1230271.406
                  ],
                  [
                    2649685.978,
                    1230268.496
                  ],
                  [
                    2649689.947,
                    1230266.776
                  ],
                  [
                    2649695.238,
                    1230265.056
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1694283,
            "BWE_ID": 772633,
            "Nutzungsidentifikator": "LU_1694283",
            "nutzungsart": 611,
            "GEO_ID": 1438440,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": 2018,
            "verpflichtung_bis": 2025,
            "schnittzeitpunkt": "15. Juni",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1694283,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.345.0",
            "display1": "611 ExWie (1438440) [29.18 a]",
            "display2": "29.18",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.220532",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649425.557,
                    1231112.834
                  ],
                  [
                    2649427.998,
                    1231115.433
                  ],
                  [
                    2649469.204,
                    1231134.219
                  ],
                  [
                    2649430.859,
                    1231177.734
                  ],
                  [
                    2649417.312,
                    1231209.807
                  ],
                  [
                    2649387.867,
                    1231198.098
                  ],
                  [
                    2649386.788,
                    1231180.478
                  ],
                  [
                    2649385.999,
                    1231155.208
                  ],
                  [
                    2649389.746,
                    1231151.892
                  ],
                  [
                    2649406.043,
                    1231150.264
                  ],
                  [
                    2649406.015,
                    1231152.295
                  ],
                  [
                    2649406.236,
                    1231154.314
                  ],
                  [
                    2649407.876,
                    1231159.549
                  ],
                  [
                    2649410.307,
                    1231158.93
                  ],
                  [
                    2649408.679,
                    1231153.767
                  ],
                  [
                    2649408.497,
                    1231151.436
                  ],
                  [
                    2649408.704,
                    1231149.108
                  ],
                  [
                    2649409.294,
                    1231146.846
                  ],
                  [
                    2649421.162,
                    1231130.889
                  ],
                  [
                    2649428.67,
                    1231134.007
                  ],
                  [
                    2649434.08,
                    1231122.448
                  ],
                  [
                    2649426.145,
                    1231118.659
                  ],
                  [
                    2649425.557,
                    1231112.834
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 220532,
            "BWE_ID": 49901,
            "Nutzungsidentifikator": "LU_220532",
            "nutzungsart": 611,
            "GEO_ID": 220532,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": 2010,
            "verpflichtung_bis": 2015,
            "schnittzeitpunkt": "15. Juni",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 220532,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1104.716.0",
            "display1": "611 ExWie (220532) [36.67 a]",
            "display2": "36.67",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1125592",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649380.074,
                    1231313.361
                  ],
                  [
                    2649391.166,
                    1231318.199
                  ],
                  [
                    2649391.395,
                    1231317.677
                  ],
                  [
                    2649408.247,
                    1231325.402
                  ],
                  [
                    2649321.895,
                    1231545.575
                  ],
                  [
                    2649292.733,
                    1231540.046
                  ],
                  [
                    2649290.402,
                    1231527.553
                  ],
                  [
                    2649290.393,
                    1231527.499
                  ],
                  [
                    2649288.733,
                    1231515.055
                  ],
                  [
                    2649288.716,
                    1231514.9
                  ],
                  [
                    2649296.907,
                    1231513.453
                  ],
                  [
                    2649294.945,
                    1231520.714
                  ],
                  [
                    2649298.644,
                    1231528.672
                  ],
                  [
                    2649310.827,
                    1231527.585
                  ],
                  [
                    2649316.872,
                    1231524.236
                  ],
                  [
                    2649323.103,
                    1231514.735
                  ],
                  [
                    2649332.083,
                    1231498.78
                  ],
                  [
                    2649338.807,
                    1231480.612
                  ],
                  [
                    2649346.606,
                    1231460.493
                  ],
                  [
                    2649353.252,
                    1231438.46
                  ],
                  [
                    2649363.72,
                    1231416.191
                  ],
                  [
                    2649366.41,
                    1231411.92
                  ],
                  [
                    2649374.227,
                    1231389.353
                  ],
                  [
                    2649381.924,
                    1231369.825
                  ],
                  [
                    2649386.984,
                    1231350.644
                  ],
                  [
                    2649389.696,
                    1231341.05
                  ],
                  [
                    2649390.87,
                    1231328.797
                  ],
                  [
                    2649385.596,
                    1231330.355
                  ],
                  [
                    2649384.522,
                    1231326.977
                  ],
                  [
                    2649383.253,
                    1231323.667
                  ],
                  [
                    2649381.858,
                    1231319.406
                  ],
                  [
                    2649380.771,
                    1231316.441
                  ],
                  [
                    2649380.074,
                    1231313.361
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1125592,
            "BWE_ID": 49901,
            "Nutzungsidentifikator": "LU_1125592",
            "nutzungsart": 611,
            "GEO_ID": 1131893,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": 2010,
            "verpflichtung_bis": 2023,
            "schnittzeitpunkt": "15. Juni",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1125592,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1104.716.0",
            "display1": "611 ExWie (1131893) [27.98 a]",
            "display2": "27.98",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1125594",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649358.502,
                    1231105.417
                  ],
                  [
                    2649362.572,
                    1231109.209
                  ],
                  [
                    2649361.895,
                    1231109.948
                  ],
                  [
                    2649371.364,
                    1231118.924
                  ],
                  [
                    2649369.807,
                    1231120.974
                  ],
                  [
                    2649370.872,
                    1231122.982
                  ],
                  [
                    2649374.442,
                    1231126.424
                  ],
                  [
                    2649372.959,
                    1231127.856
                  ],
                  [
                    2649371.278,
                    1231131.743
                  ],
                  [
                    2649376.636,
                    1231137.206
                  ],
                  [
                    2649378.65,
                    1231136.455
                  ],
                  [
                    2649382.184,
                    1231149.258
                  ],
                  [
                    2649347.073,
                    1231120.847
                  ],
                  [
                    2649305.259,
                    1231170.69
                  ],
                  [
                    2649267.282,
                    1231221.193
                  ],
                  [
                    2649267.545,
                    1231223.816
                  ],
                  [
                    2649270.605,
                    1231227.139
                  ],
                  [
                    2649275.458,
                    1231230.286
                  ],
                  [
                    2649281.842,
                    1231234.702
                  ],
                  [
                    2649285.208,
                    1231238.549
                  ],
                  [
                    2649281.999,
                    1231240.396
                  ],
                  [
                    2649281.848,
                    1231240.16
                  ],
                  [
                    2649281.586,
                    1231239.765
                  ],
                  [
                    2649281.369,
                    1231239.451
                  ],
                  [
                    2649281.169,
                    1231239.171
                  ],
                  [
                    2649280.944,
                    1231238.867
                  ],
                  [
                    2649280.712,
                    1231238.567
                  ],
                  [
                    2649280.582,
                    1231238.405
                  ],
                  [
                    2649280.566,
                    1231238.383
                  ],
                  [
                    2649280.475,
                    1231238.271
                  ],
                  [
                    2649280.225,
                    1231237.97
                  ],
                  [
                    2649279.972,
                    1231237.676
                  ],
                  [
                    2649278.901,
                    1231236.546
                  ],
                  [
                    2649276.341,
                    1231234.443
                  ],
                  [
                    2649273.481,
                    1231232.769
                  ],
                  [
                    2649270.395,
                    1231231.566
                  ],
                  [
                    2649268.246,
                    1231230.494
                  ],
                  [
                    2649266.25,
                    1231229.159
                  ],
                  [
                    2649264.438,
                    1231227.582
                  ],
                  [
                    2649262.95,
                    1231225.891
                  ],
                  [
                    2649262.609,
                    1231225.447
                  ],
                  [
                    2649261.993,
                    1231224.525
                  ],
                  [
                    2649261.527,
                    1231223.827
                  ],
                  [
                    2649261.239,
                    1231223.327
                  ],
                  [
                    2649260.252,
                    1231221.313
                  ],
                  [
                    2649260.729,
                    1231215.633
                  ],
                  [
                    2649260.738,
                    1231215.559
                  ],
                  [
                    2649261.537,
                    1231210.286
                  ],
                  [
                    2649261.589,
                    1231209.945
                  ],
                  [
                    2649262.828,
                    1231204.323
                  ],
                  [
                    2649264.756,
                    1231198.658
                  ],
                  [
                    2649267.072,
                    1231193.142
                  ],
                  [
                    2649269.767,
                    1231187.799
                  ],
                  [
                    2649275.26,
                    1231180
                  ],
                  [
                    2649281.047,
                    1231172.417
                  ],
                  [
                    2649288.112,
                    1231164.051
                  ],
                  [
                    2649295.536,
                    1231156.002
                  ],
                  [
                    2649305.898,
                    1231146.395
                  ],
                  [
                    2649311.663,
                    1231141.566
                  ],
                  [
                    2649317.469,
                    1231136.962
                  ],
                  [
                    2649358.502,
                    1231105.417
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1125594,
            "BWE_ID": 49901,
            "Nutzungsidentifikator": "LU_1125594",
            "nutzungsart": 611,
            "GEO_ID": 1131895,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": 2010,
            "verpflichtung_bis": 2023,
            "schnittzeitpunkt": "15. Juni",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1125594,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1104.716.0",
            "display1": "611 ExWie (1131895) [25.31 a]",
            "display2": "25.31",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1907099",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649387.867,
                    1231198.098
                  ],
                  [
                    2649417.312,
                    1231209.807
                  ],
                  [
                    2649402.422,
                    1231242.813
                  ],
                  [
                    2649403.125,
                    1231252.656
                  ],
                  [
                    2649403.047,
                    1231260.859
                  ],
                  [
                    2649401.953,
                    1231267.266
                  ],
                  [
                    2649393.672,
                    1231292.031
                  ],
                  [
                    2649408.594,
                    1231296.563
                  ],
                  [
                    2649413.435,
                    1231313
                  ],
                  [
                    2649408.247,
                    1231325.402
                  ],
                  [
                    2649401.769,
                    1231302.864
                  ],
                  [
                    2649382.719,
                    1231297.833
                  ],
                  [
                    2649392.742,
                    1231265.021
                  ],
                  [
                    2649393.929,
                    1231259.739
                  ],
                  [
                    2649394.658,
                    1231254.374
                  ],
                  [
                    2649394.925,
                    1231248.966
                  ],
                  [
                    2649394.576,
                    1231241.922
                  ],
                  [
                    2649393.442,
                    1231234.961
                  ],
                  [
                    2649388.565,
                    1231209.501
                  ],
                  [
                    2649387.867,
                    1231198.098
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1907099,
            "BWE_ID": 49901,
            "Nutzungsidentifikator": "LU_1907099",
            "nutzungsart": 611,
            "GEO_ID": 1646600,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": 2020,
            "verpflichtung_bis": 2027,
            "schnittzeitpunkt": "15. Juni",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1907099,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1104.716.0",
            "display1": "611 ExWie (1646600) [15.56 a]",
            "display2": "15.56",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1907127",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649374.442,
                    1231126.424
                  ],
                  [
                    2649375.464,
                    1231127.409
                  ],
                  [
                    2649379.645,
                    1231134.992
                  ],
                  [
                    2649382.744,
                    1231150.743
                  ],
                  [
                    2649382.184,
                    1231149.258
                  ],
                  [
                    2649378.65,
                    1231136.455
                  ],
                  [
                    2649376.636,
                    1231137.206
                  ],
                  [
                    2649371.278,
                    1231131.743
                  ],
                  [
                    2649372.959,
                    1231127.856
                  ],
                  [
                    2649374.442,
                    1231126.424
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1907127,
            "BWE_ID": 49901,
            "Nutzungsidentifikator": "LU_1907127",
            "nutzungsart": 611,
            "GEO_ID": 1646628,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": 2020,
            "verpflichtung_bis": 2027,
            "schnittzeitpunkt": "15. Juni",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1907127,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1104.716.0",
            "display1": "611 ExWie (1646628) [0.57 a]",
            "display2": "0.57",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1108640",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649300.533,
                    1230923.036
                  ],
                  [
                    2649313.431,
                    1230927.996
                  ],
                  [
                    2649322.664,
                    1230935.574
                  ],
                  [
                    2649331.781,
                    1230952.038
                  ],
                  [
                    2649326.938,
                    1230962.761
                  ],
                  [
                    2649325.025,
                    1230959.484
                  ],
                  [
                    2649325.674,
                    1230959.106
                  ],
                  [
                    2649314.508,
                    1230939.973
                  ],
                  [
                    2649309.262,
                    1230935.187
                  ],
                  [
                    2649301.491,
                    1230931.997
                  ],
                  [
                    2649301.206,
                    1230932.691
                  ],
                  [
                    2649298.879,
                    1230931.736
                  ],
                  [
                    2649300.533,
                    1230923.036
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1108640,
            "BWE_ID": 49920,
            "Nutzungsidentifikator": "LU_1108640",
            "nutzungsart": 611,
            "GEO_ID": 1108637,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": 2016,
            "verpflichtung_bis": 2023,
            "schnittzeitpunkt": "15. Juni",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1108640,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1104.740.0",
            "display1": "611 ExWie (1108637) [3.85 a]",
            "display2": "3.85",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.278345",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649292.733,
                    1231540.046
                  ],
                  [
                    2649321.178,
                    1231545.451
                  ],
                  [
                    2649307.785,
                    1231580.236
                  ],
                  [
                    2649313.517,
                    1231630.566
                  ],
                  [
                    2649311.734,
                    1231630.219
                  ],
                  [
                    2649292.733,
                    1231540.046
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 278345,
            "BWE_ID": 49900,
            "Nutzungsidentifikator": "LU_278345",
            "nutzungsart": 611,
            "GEO_ID": 245894,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": 2011,
            "verpflichtung_bis": 2016,
            "schnittzeitpunkt": "15. Juni",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 278345,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1104.714.0",
            "display1": "611 ExWie (245894) [8.72 a]",
            "display2": "8.72",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1108558",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649416.554,
                    1229749.933
                  ],
                  [
                    2649422.735,
                    1229750.312
                  ],
                  [
                    2649428.199,
                    1229750.664
                  ],
                  [
                    2649427.629,
                    1229754.564
                  ],
                  [
                    2649428.432,
                    1229757.757
                  ],
                  [
                    2649428.44,
                    1229757.855
                  ],
                  [
                    2649428.451,
                    1229757.919
                  ],
                  [
                    2649428.466,
                    1229757.983
                  ],
                  [
                    2649428.485,
                    1229758.046
                  ],
                  [
                    2649428.508,
                    1229758.107
                  ],
                  [
                    2649428.535,
                    1229758.167
                  ],
                  [
                    2649428.566,
                    1229758.224
                  ],
                  [
                    2649428.6,
                    1229758.28
                  ],
                  [
                    2649428.629,
                    1229758.319
                  ],
                  [
                    2649428.589,
                    1229758.342
                  ],
                  [
                    2649428.125,
                    1229758.533
                  ],
                  [
                    2649428.11,
                    1229758.538
                  ],
                  [
                    2649427.606,
                    1229758.654
                  ],
                  [
                    2649427.094,
                    1229758.689
                  ],
                  [
                    2649421.105,
                    1229758.499
                  ],
                  [
                    2649420.42,
                    1229758.472
                  ],
                  [
                    2649419.741,
                    1229758.556
                  ],
                  [
                    2649419.084,
                    1229758.749
                  ],
                  [
                    2649418.468,
                    1229759.047
                  ],
                  [
                    2649417.908,
                    1229759.441
                  ],
                  [
                    2649417.419,
                    1229759.921
                  ],
                  [
                    2649417.015,
                    1229760.474
                  ],
                  [
                    2649416.706,
                    1229761.085
                  ],
                  [
                    2649410.183,
                    1229771.423
                  ],
                  [
                    2649408.902,
                    1229773.019
                  ],
                  [
                    2649407.428,
                    1229774.439
                  ],
                  [
                    2649401.747,
                    1229778.117
                  ],
                  [
                    2649406.714,
                    1229762.422
                  ],
                  [
                    2649412.643,
                    1229751.699
                  ],
                  [
                    2649416.554,
                    1229749.933
                  ]
                ]
              ],
              [
                [
                  [
                    2649460.228,
                    1229695.001
                  ],
                  [
                    2649469.658,
                    1229699.377
                  ],
                  [
                    2649453.217,
                    1229729.811
                  ],
                  [
                    2649448.817,
                    1229738.399
                  ],
                  [
                    2649440.483,
                    1229738.077
                  ],
                  [
                    2649440.219,
                    1229738.001
                  ],
                  [
                    2649440.204,
                    1229738.006
                  ],
                  [
                    2649440.183,
                    1229738
                  ],
                  [
                    2649440.053,
                    1229738.009
                  ],
                  [
                    2649439.988,
                    1229738.019
                  ],
                  [
                    2649439.924,
                    1229738.034
                  ],
                  [
                    2649439.862,
                    1229738.053
                  ],
                  [
                    2649435.841,
                    1229739.507
                  ],
                  [
                    2649460.228,
                    1229695.001
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1108558,
            "BWE_ID": 19527,
            "Nutzungsidentifikator": "LU_1108558",
            "nutzungsart": 611,
            "GEO_ID": 1108554,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": 2016,
            "verpflichtung_bis": 2023,
            "schnittzeitpunkt": "15. Juni",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1108558,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.267.0",
            "display1": "611 ExWie (1108554) [7.63 a]",
            "display2": "7.63",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.13543",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649403.979,
                    1230130.91
                  ],
                  [
                    2649324.13,
                    1230228.28
                  ],
                  [
                    2649286.01,
                    1230274.6
                  ],
                  [
                    2649273.74,
                    1230267.661
                  ],
                  [
                    2649252.051,
                    1230253.561
                  ],
                  [
                    2649250.271,
                    1230247.371
                  ],
                  [
                    2649256.341,
                    1230234.861
                  ],
                  [
                    2649262.161,
                    1230224.961
                  ],
                  [
                    2649271.601,
                    1230209.981
                  ],
                  [
                    2649294.91,
                    1230229.17
                  ],
                  [
                    2649324.51,
                    1230193.24
                  ],
                  [
                    2649298.08,
                    1230171.518
                  ],
                  [
                    2649298.51,
                    1230170.268
                  ],
                  [
                    2649304.175,
                    1230164.92
                  ],
                  [
                    2649310.191,
                    1230160.67
                  ],
                  [
                    2649324.76,
                    1230152.52
                  ],
                  [
                    2649338.1,
                    1230146.31
                  ],
                  [
                    2649356.48,
                    1230139.19
                  ],
                  [
                    2649376.2,
                    1230134.51
                  ],
                  [
                    2649403.979,
                    1230130.91
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 13543,
            "BWE_ID": 19520,
            "Nutzungsidentifikator": "LU_13543",
            "nutzungsart": 611,
            "GEO_ID": 13543,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": 2003,
            "verpflichtung_bis": 2008,
            "schnittzeitpunkt": "15. Juni",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 13543,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.244.0",
            "display1": "611 ExWie (13543) [66.60 a]",
            "display2": "66.60",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.13545",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649339.499,
                    1230058.372
                  ],
                  [
                    2649362.999,
                    1230071.222
                  ],
                  [
                    2649375.699,
                    1230078.081
                  ],
                  [
                    2649355.42,
                    1230135.75
                  ],
                  [
                    2649355.429,
                    1230135.723
                  ],
                  [
                    2649345.208,
                    1230113.925
                  ],
                  [
                    2649317.227,
                    1230126.21
                  ],
                  [
                    2649321,
                    1230114.921
                  ],
                  [
                    2649333.299,
                    1230074.052
                  ],
                  [
                    2649339.499,
                    1230058.372
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 13545,
            "BWE_ID": 19521,
            "Nutzungsidentifikator": "LU_13545",
            "nutzungsart": 611,
            "GEO_ID": 13545,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": 2003,
            "verpflichtung_bis": 2008,
            "schnittzeitpunkt": "15. Juni",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 13545,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.247.0",
            "display1": "611 ExWie (13545) [23.04 a]",
            "display2": "23.04",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1698753",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649403.244,
                    1229669.046
                  ],
                  [
                    2649404.299,
                    1229669.198
                  ],
                  [
                    2649405.316,
                    1229669.519
                  ],
                  [
                    2649413.997,
                    1229673.548
                  ],
                  [
                    2649405.273,
                    1229689.844
                  ],
                  [
                    2649393.945,
                    1229684.57
                  ],
                  [
                    2649341.246,
                    1229794.708
                  ],
                  [
                    2649342.216,
                    1229786.178
                  ],
                  [
                    2649368.565,
                    1229730.789
                  ],
                  [
                    2649397.152,
                    1229671.802
                  ],
                  [
                    2649397.435,
                    1229671.939
                  ],
                  [
                    2649397.982,
                    1229671.228
                  ],
                  [
                    2649398.622,
                    1229670.598
                  ],
                  [
                    2649399.342,
                    1229670.063
                  ],
                  [
                    2649400.129,
                    1229669.631
                  ],
                  [
                    2649401.131,
                    1229669.265
                  ],
                  [
                    2649402.178,
                    1229669.069
                  ],
                  [
                    2649403.244,
                    1229669.046
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1698753,
            "BWE_ID": 19527,
            "Nutzungsidentifikator": "LU_1698753",
            "nutzungsart": 613,
            "GEO_ID": 1442908,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1698753,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.267.0",
            "display1": "613 UebDWie [6.13 a]",
            "display2": "6.13",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1698764",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649361.161,
                    1229645.553
                  ],
                  [
                    2649368.91,
                    1229648.392
                  ],
                  [
                    2649367.839,
                    1229651.011
                  ],
                  [
                    2649370.895,
                    1229652.082
                  ],
                  [
                    2649371.926,
                    1229649.384
                  ],
                  [
                    2649374.863,
                    1229650.495
                  ],
                  [
                    2649372.479,
                    1229655.749
                  ],
                  [
                    2649370.878,
                    1229659.402
                  ],
                  [
                    2649372.532,
                    1229660.262
                  ],
                  [
                    2649367.746,
                    1229670.086
                  ],
                  [
                    2649355.371,
                    1229664.355
                  ],
                  [
                    2649361.161,
                    1229645.553
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1698764,
            "BWE_ID": 19657,
            "Nutzungsidentifikator": "LU_1698764",
            "nutzungsart": 613,
            "GEO_ID": 1442919,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1698764,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.460.0",
            "display1": "613 UebDWie [2.78 a]",
            "display2": "2.78",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1698765",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649388.312,
                    1229671.047
                  ],
                  [
                    2649390.841,
                    1229672.312
                  ],
                  [
                    2649391.223,
                    1229675.212
                  ],
                  [
                    2649389.224,
                    1229679.896
                  ],
                  [
                    2649384.901,
                    1229677.989
                  ],
                  [
                    2649388.312,
                    1229671.047
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1698765,
            "BWE_ID": 19657,
            "Nutzungsidentifikator": "LU_1698765",
            "nutzungsart": 613,
            "GEO_ID": 1442920,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1698765,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.460.0",
            "display1": "613 UebDWie [0.33 a]",
            "display2": "0.33",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1698762",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2649922.393,
                    1229785.404
                  ],
                  [
                    2649928.36,
                    1229789.485
                  ],
                  [
                    2649934.272,
                    1229791.286
                  ],
                  [
                    2649936.1,
                    1229790.004
                  ],
                  [
                    2649951.743,
                    1229803.199
                  ],
                  [
                    2649955.175,
                    1229806.102
                  ],
                  [
                    2649956.299,
                    1229806.234
                  ],
                  [
                    2649959.011,
                    1229805.837
                  ],
                  [
                    2649961.922,
                    1229803.985
                  ],
                  [
                    2649969.418,
                    1229795.182
                  ],
                  [
                    2649971.662,
                    1229797.67
                  ],
                  [
                    2649952.148,
                    1229819.336
                  ],
                  [
                    2649917.609,
                    1229791.319
                  ],
                  [
                    2649922.393,
                    1229785.404
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1698762,
            "BWE_ID": 19578,
            "Nutzungsidentifikator": "LU_1698762",
            "nutzungsart": 613,
            "GEO_ID": 1442917,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1698762,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.348.0",
            "display1": "613 UebDWie [5.65 a]",
            "display2": "5.65",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1698763",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2650022.063,
                    1229859.668
                  ],
                  [
                    2650025.323,
                    1229861.698
                  ],
                  [
                    2650027.193,
                    1229865.458
                  ],
                  [
                    2650027.763,
                    1229868.937
                  ],
                  [
                    2650027.003,
                    1229873.757
                  ],
                  [
                    2650008.182,
                    1229986.255
                  ],
                  [
                    2650002.272,
                    1230022.265
                  ],
                  [
                    2649998.587,
                    1230020.263
                  ],
                  [
                    2650021.68,
                    1229893.555
                  ],
                  [
                    2650024.805,
                    1229871.484
                  ],
                  [
                    2650022.063,
                    1229859.668
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1698763,
            "BWE_ID": 19578,
            "Nutzungsidentifikator": "LU_1698763",
            "nutzungsart": 613,
            "GEO_ID": 1442918,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1698763,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.348.0",
            "display1": "613 UebDWie [4.67 a]",
            "display2": "4.67",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.161372",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2650172.098,
                    1229566.161
                  ],
                  [
                    2650183.169,
                    1229694.823
                  ],
                  [
                    2650221.668,
                    1229736.722
                  ],
                  [
                    2650217.299,
                    1229736.537
                  ],
                  [
                    2650194.618,
                    1229754.067
                  ],
                  [
                    2650184.778,
                    1229741.755
                  ],
                  [
                    2650184.707,
                    1229740.307
                  ],
                  [
                    2650184.037,
                    1229735.287
                  ],
                  [
                    2650178.296,
                    1229731.237
                  ],
                  [
                    2650158.148,
                    1229716.234
                  ],
                  [
                    2650139.579,
                    1229717.763
                  ],
                  [
                    2650103.348,
                    1229697.024
                  ],
                  [
                    2650102.276,
                    1229704.478
                  ],
                  [
                    2650101.646,
                    1229705.666
                  ],
                  [
                    2650095.686,
                    1229702.29
                  ],
                  [
                    2650097.366,
                    1229688.38
                  ],
                  [
                    2650095.616,
                    1229678.56
                  ],
                  [
                    2650091.736,
                    1229669.301
                  ],
                  [
                    2650085.786,
                    1229661.231
                  ],
                  [
                    2650078.166,
                    1229654.791
                  ],
                  [
                    2650069.286,
                    1229650.261
                  ],
                  [
                    2650064.175,
                    1229647.231
                  ],
                  [
                    2650062.305,
                    1229645.381
                  ],
                  [
                    2650060.475,
                    1229642.041
                  ],
                  [
                    2650059.915,
                    1229637.922
                  ],
                  [
                    2650060.445,
                    1229633.972
                  ],
                  [
                    2650063.685,
                    1229620.272
                  ],
                  [
                    2650064.716,
                    1229616.402
                  ],
                  [
                    2650066.036,
                    1229612.682
                  ],
                  [
                    2650067.676,
                    1229609.592
                  ],
                  [
                    2650069.996,
                    1229606.372
                  ],
                  [
                    2650072.356,
                    1229603.832
                  ],
                  [
                    2650074.108,
                    1229603.811
                  ],
                  [
                    2650075.842,
                    1229604.061
                  ],
                  [
                    2650077.517,
                    1229604.576
                  ],
                  [
                    2650079.205,
                    1229605.411
                  ],
                  [
                    2650080.731,
                    1229606.514
                  ],
                  [
                    2650099.612,
                    1229623.233
                  ],
                  [
                    2650089.492,
                    1229635.315
                  ],
                  [
                    2650097.271,
                    1229641.612
                  ],
                  [
                    2650096.107,
                    1229642.935
                  ],
                  [
                    2650136.633,
                    1229673.381
                  ],
                  [
                    2650140.189,
                    1229669.142
                  ],
                  [
                    2650145.248,
                    1229672.486
                  ],
                  [
                    2650146.836,
                    1229673.164
                  ],
                  [
                    2650147.615,
                    1229672.233
                  ],
                  [
                    2650151.217,
                    1229668.126
                  ],
                  [
                    2650147.365,
                    1229665.142
                  ],
                  [
                    2650146.51,
                    1229666.145
                  ],
                  [
                    2650144.148,
                    1229663.977
                  ],
                  [
                    2650144.698,
                    1229663.279
                  ],
                  [
                    2650143.915,
                    1229662.729
                  ],
                  [
                    2650149.316,
                    1229657.542
                  ],
                  [
                    2650143.21,
                    1229651.105
                  ],
                  [
                    2650140.573,
                    1229653.587
                  ],
                  [
                    2650140.282,
                    1229653.276
                  ],
                  [
                    2650139.129,
                    1229651.18
                  ],
                  [
                    2650138.289,
                    1229649.117
                  ],
                  [
                    2650137.397,
                    1229645.979
                  ],
                  [
                    2650136.915,
                    1229643.661
                  ],
                  [
                    2650136.787,
                    1229642.678
                  ],
                  [
                    2650134.859,
                    1229635.354
                  ],
                  [
                    2650134.283,
                    1229634.005
                  ],
                  [
                    2650132.818,
                    1229631.619
                  ],
                  [
                    2650130.97,
                    1229629.628
                  ],
                  [
                    2650129.161,
                    1229628.168
                  ],
                  [
                    2650125.939,
                    1229626.433
                  ],
                  [
                    2650121.176,
                    1229624.898
                  ],
                  [
                    2650116.89,
                    1229624.105
                  ],
                  [
                    2650112.075,
                    1229623.628
                  ],
                  [
                    2650107.577,
                    1229622.835
                  ],
                  [
                    2650103.008,
                    1229620.997
                  ],
                  [
                    2650100.155,
                    1229619.133
                  ],
                  [
                    2650097.551,
                    1229616.935
                  ],
                  [
                    2650082.534,
                    1229602.486
                  ],
                  [
                    2650081.731,
                    1229597.303
                  ],
                  [
                    2650100.297,
                    1229586.052
                  ],
                  [
                    2650116.237,
                    1229577.762
                  ],
                  [
                    2650130.717,
                    1229572.922
                  ],
                  [
                    2650144.388,
                    1229570.25
                  ],
                  [
                    2650172.098,
                    1229566.161
                  ]
                ],
                [
                  [
                    2650158.765,
                    1229661.929
                  ],
                  [
                    2650156.029,
                    1229666.439
                  ],
                  [
                    2650159.439,
                    1229668.545
                  ],
                  [
                    2650162.22,
                    1229663.867
                  ],
                  [
                    2650158.765,
                    1229661.929
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 161372,
            "BWE_ID": 19596,
            "Nutzungsidentifikator": "LU_161372",
            "nutzungsart": 613,
            "GEO_ID": 161372,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 161372,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.369.2",
            "display1": "613 UebDWie [129.17 a]",
            "display2": "129.17",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.91782",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2650085.571,
                    1229702.451
                  ],
                  [
                    2650085.486,
                    1229702.795
                  ],
                  [
                    2650083.504,
                    1229707.944
                  ],
                  [
                    2650081.192,
                    1229713.196
                  ],
                  [
                    2650080.277,
                    1229717.026
                  ],
                  [
                    2650077.116,
                    1229722.061
                  ],
                  [
                    2650065.451,
                    1229739.444
                  ],
                  [
                    2650059.775,
                    1229748.474
                  ],
                  [
                    2650053.982,
                    1229759.073
                  ],
                  [
                    2650053.227,
                    1229758.728
                  ],
                  [
                    2650046.037,
                    1229772.544
                  ],
                  [
                    2650041.297,
                    1229784.207
                  ],
                  [
                    2650036.5,
                    1229800.909
                  ],
                  [
                    2650033.847,
                    1229815.741
                  ],
                  [
                    2650030.081,
                    1229848.037
                  ],
                  [
                    2650028.133,
                    1229849.801
                  ],
                  [
                    2650025.723,
                    1229851.051
                  ],
                  [
                    2650026.334,
                    1229852.322
                  ],
                  [
                    2650022.803,
                    1229852.968
                  ],
                  [
                    2650017.913,
                    1229852.808
                  ],
                  [
                    2650012.423,
                    1229851.238
                  ],
                  [
                    2650008.963,
                    1229848.668
                  ],
                  [
                    2650006.393,
                    1229845.178
                  ],
                  [
                    2649980.663,
                    1229801.03
                  ],
                  [
                    2649976.113,
                    1229794.86
                  ],
                  [
                    2649971.112,
                    1229789.13
                  ],
                  [
                    2649963.022,
                    1229781.11
                  ],
                  [
                    2649982.873,
                    1229780.95
                  ],
                  [
                    2649981.393,
                    1229759.43
                  ],
                  [
                    2649961.672,
                    1229761.29
                  ],
                  [
                    2649971.146,
                    1229754.277
                  ],
                  [
                    2649972.763,
                    1229752.983
                  ],
                  [
                    2649974.252,
                    1229751.54
                  ],
                  [
                    2649975.367,
                    1229750.255
                  ],
                  [
                    2649984.212,
                    1229748.662
                  ],
                  [
                    2649982.227,
                    1229734.735
                  ],
                  [
                    2649991.725,
                    1229729.648
                  ],
                  [
                    2649991.771,
                    1229729.639
                  ],
                  [
                    2650004.06,
                    1229722.84
                  ],
                  [
                    2650006.744,
                    1229721.285
                  ],
                  [
                    2650014.462,
                    1229717.686
                  ],
                  [
                    2650026.384,
                    1229713.501
                  ],
                  [
                    2650037.812,
                    1229711.088
                  ],
                  [
                    2650041.802,
                    1229710.733
                  ],
                  [
                    2650067.586,
                    1229707.668
                  ],
                  [
                    2650072.295,
                    1229706.323
                  ],
                  [
                    2650073.004,
                    1229706.097
                  ],
                  [
                    2650085.571,
                    1229702.451
                  ]
                ],
                [
                  [
                    2649988.236,
                    1229742.241
                  ],
                  [
                    2649985.704,
                    1229742.783
                  ],
                  [
                    2649986.543,
                    1229746.548
                  ],
                  [
                    2649989.005,
                    1229746.22
                  ],
                  [
                    2649988.236,
                    1229742.241
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 91782,
            "BWE_ID": 54608,
            "Nutzungsidentifikator": "LU_91782",
            "nutzungsart": 613,
            "GEO_ID": 91782,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 91782,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.87.1",
            "display1": "613 UebDWie [85.01 a]",
            "display2": "85.01",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1907284",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2653947.543,
                    1234302.123
                  ],
                  [
                    2653958.523,
                    1234308.412
                  ],
                  [
                    2653967.11,
                    1234313.266
                  ],
                  [
                    2653979.056,
                    1234318.972
                  ],
                  [
                    2653988.708,
                    1234323.77
                  ],
                  [
                    2653955.238,
                    1234359.009
                  ],
                  [
                    2653939.6,
                    1234375.607
                  ],
                  [
                    2653896.153,
                    1234340.256
                  ],
                  [
                    2653893.706,
                    1234338.341
                  ],
                  [
                    2653898.077,
                    1234330.928
                  ],
                  [
                    2653901.814,
                    1234322.878
                  ],
                  [
                    2653904.669,
                    1234312.987
                  ],
                  [
                    2653917.47,
                    1234318.941
                  ],
                  [
                    2653921.18,
                    1234307.385
                  ],
                  [
                    2653941.016,
                    1234311.914
                  ],
                  [
                    2653947.543,
                    1234302.123
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1907284,
            "BWE_ID": 848336,
            "Nutzungsidentifikator": "LU_1907284",
            "nutzungsart": 613,
            "GEO_ID": 1646785,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1907284,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "4135.255.1",
            "display1": "613 UebDWie [37.08 a]",
            "display2": "37.08",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1907313",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2653943.86,
                    1234300.013
                  ],
                  [
                    2653947.543,
                    1234302.123
                  ],
                  [
                    2653941.016,
                    1234311.914
                  ],
                  [
                    2653921.18,
                    1234307.385
                  ],
                  [
                    2653918.152,
                    1234305.893
                  ],
                  [
                    2653920.829,
                    1234300.184
                  ],
                  [
                    2653939.594,
                    1234307.213
                  ],
                  [
                    2653943.86,
                    1234300.013
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1907313,
            "BWE_ID": 848336,
            "Nutzungsidentifikator": "LU_1907313",
            "nutzungsart": 613,
            "GEO_ID": 1646814,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1907313,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "4135.255.1",
            "display1": "613 UebDWie [1.60 a]",
            "display2": "1.60",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.80606",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2650046.717,
                    1229654.998
                  ],
                  [
                    2650054.266,
                    1229655.438
                  ],
                  [
                    2650060.214,
                    1229656.487
                  ],
                  [
                    2650065.897,
                    1229658.623
                  ],
                  [
                    2650071.042,
                    1229661.713
                  ],
                  [
                    2650075.998,
                    1229665.352
                  ],
                  [
                    2650080.163,
                    1229669.61
                  ],
                  [
                    2650083.512,
                    1229674.596
                  ],
                  [
                    2650086.003,
                    1229680.052
                  ],
                  [
                    2650087.433,
                    1229685.815
                  ],
                  [
                    2650087.578,
                    1229692.03
                  ],
                  [
                    2650086.801,
                    1229697.512
                  ],
                  [
                    2650078.496,
                    1229693.04
                  ],
                  [
                    2650079.036,
                    1229692.2
                  ],
                  [
                    2650072.625,
                    1229689.16
                  ],
                  [
                    2650066.675,
                    1229687.65
                  ],
                  [
                    2650066.749,
                    1229687.359
                  ],
                  [
                    2650065.193,
                    1229671.999
                  ],
                  [
                    2650064.301,
                    1229672.188
                  ],
                  [
                    2650052.936,
                    1229672.255
                  ],
                  [
                    2650048.718,
                    1229674.402
                  ],
                  [
                    2650047.889,
                    1229674.671
                  ],
                  [
                    2650047.028,
                    1229674.809
                  ],
                  [
                    2650046.157,
                    1229674.812
                  ],
                  [
                    2650045.307,
                    1229674.683
                  ],
                  [
                    2650044.487,
                    1229674.427
                  ],
                  [
                    2650043.716,
                    1229674.049
                  ],
                  [
                    2650036.558,
                    1229666.297
                  ],
                  [
                    2650029.888,
                    1229662.931
                  ],
                  [
                    2650020.041,
                    1229662.036
                  ],
                  [
                    2650003.106,
                    1229664.008
                  ],
                  [
                    2649994.087,
                    1229663.306
                  ],
                  [
                    2649980.584,
                    1229667.373
                  ],
                  [
                    2649977.144,
                    1229664.211
                  ],
                  [
                    2649975.385,
                    1229663.19
                  ],
                  [
                    2649973.942,
                    1229662.615
                  ],
                  [
                    2649972.437,
                    1229662.227
                  ],
                  [
                    2649970.896,
                    1229662.031
                  ],
                  [
                    2649954.613,
                    1229661.101
                  ],
                  [
                    2649954.199,
                    1229659.668
                  ],
                  [
                    2649965.564,
                    1229660.653
                  ],
                  [
                    2649980.894,
                    1229660.642
                  ],
                  [
                    2649980.982,
                    1229662.636
                  ],
                  [
                    2649987.199,
                    1229662.364
                  ],
                  [
                    2649987.164,
                    1229660.312
                  ],
                  [
                    2650000.522,
                    1229659.259
                  ],
                  [
                    2650038.031,
                    1229655.41
                  ],
                  [
                    2650046.717,
                    1229654.998
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 80606,
            "BWE_ID": 19732,
            "Nutzungsidentifikator": "LU_80606",
            "nutzungsart": 613,
            "GEO_ID": 80606,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 80606,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.92.0",
            "display1": "613 UebDWie [13.44 a]",
            "display2": "13.44",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1125899",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2653893.706,
                    1234338.341
                  ],
                  [
                    2653896.153,
                    1234340.256
                  ],
                  [
                    2653939.6,
                    1234375.607
                  ],
                  [
                    2653921.018,
                    1234395.164
                  ],
                  [
                    2653919.137,
                    1234397.193
                  ],
                  [
                    2653893.254,
                    1234368.077
                  ],
                  [
                    2653884.919,
                    1234358.715
                  ],
                  [
                    2653883.78,
                    1234355.907
                  ],
                  [
                    2653893.706,
                    1234338.341
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1125899,
            "BWE_ID": 546079,
            "Nutzungsidentifikator": "LU_1125899",
            "nutzungsart": 613,
            "GEO_ID": 1132259,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1125899,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "4135.254.0",
            "display1": "613 UebDWie [14.19 a]",
            "display2": "14.19",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1125901",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2654170.648,
                    1234064.226
                  ],
                  [
                    2654173.625,
                    1234065.179
                  ],
                  [
                    2654194.318,
                    1234071.861
                  ],
                  [
                    2654218.754,
                    1234080.101
                  ],
                  [
                    2654235.647,
                    1234081.307
                  ],
                  [
                    2654263.75,
                    1234082.327
                  ],
                  [
                    2654289.064,
                    1234082.178
                  ],
                  [
                    2654288.586,
                    1234087.807
                  ],
                  [
                    2654263.545,
                    1234091.2
                  ],
                  [
                    2654233.389,
                    1234095.042
                  ],
                  [
                    2654215.177,
                    1234094.546
                  ],
                  [
                    2654189.37,
                    1234083.203
                  ],
                  [
                    2654165.838,
                    1234069.634
                  ],
                  [
                    2654170.648,
                    1234064.226
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1125901,
            "BWE_ID": 546080,
            "Nutzungsidentifikator": "LU_1125901",
            "nutzungsart": 613,
            "GEO_ID": 1132263,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1125901,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "4135.265.0",
            "display1": "613 UebDWie [13.74 a]",
            "display2": "13.74",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1698761",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    2650299.785,
                    1229925.035
                  ],
                  [
                    2650306.656,
                    1229934.806
                  ],
                  [
                    2650307.42,
                    1229936.351
                  ],
                  [
                    2650319.725,
                    1229957.25
                  ],
                  [
                    2650203.527,
                    1230016.03
                  ],
                  [
                    2650203.527,
                    1230016.07
                  ],
                  [
                    2650202.723,
                    1230014.018
                  ],
                  [
                    2650196.333,
                    1230013.978
                  ],
                  [
                    2650189.11,
                    1230014.732
                  ],
                  [
                    2650181.49,
                    1230016.558
                  ],
                  [
                    2650182.381,
                    1230026.246
                  ],
                  [
                    2650165.694,
                    1230027.591
                  ],
                  [
                    2650164.79,
                    1230030.484
                  ],
                  [
                    2650164.685,
                    1230030.539
                  ],
                  [
                    2650160.5,
                    1230030.597
                  ],
                  [
                    2650159.043,
                    1230027.371
                  ],
                  [
                    2650158.986,
                    1230025.792
                  ],
                  [
                    2650155.036,
                    1230019.483
                  ],
                  [
                    2650147.526,
                    1230014.133
                  ],
                  [
                    2650136.526,
                    1230010.033
                  ],
                  [
                    2650122.185,
                    1230007.323
                  ],
                  [
                    2650108.193,
                    1230005.549
                  ],
                  [
                    2650299.785,
                    1229925.035
                  ]
                ],
                [
                  [
                    2650181.683,
                    1230008.753
                  ],
                  [
                    2650179.324,
                    1230009.938
                  ],
                  [
                    2650181.103,
                    1230013.477
                  ],
                  [
                    2650183.462,
                    1230012.292
                  ],
                  [
                    2650181.683,
                    1230008.753
                  ]
                ]
              ]
            ]
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1698761,
            "BWE_ID": 772632,
            "Nutzungsidentifikator": "LU_1698761",
            "nutzungsart": 613,
            "GEO_ID": 1442916,
            "anzahl_baeume": null,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1698761,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.336.1",
            "display1": "613 UebDWie [77.91 a]",
            "display2": "77.91",
            "programme": "",
            "art": "wiese"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1694280",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": []
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1694280,
            "BWE_ID": 772632,
            "Nutzungsidentifikator": "LU_1694280",
            "nutzungsart": 921,
            "GEO_ID": 1438437,
            "anzahl_baeume": 30,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1694280,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.336.1",
            "display1": "921 HSBa (1438437) [30 Stk]",
            "display2": "30",
            "programme": "",
            "art": "baum"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1694284",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": []
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1694284,
            "BWE_ID": 772633,
            "Nutzungsidentifikator": "LU_1694284",
            "nutzungsart": 921,
            "GEO_ID": 1438441,
            "anzahl_baeume": 10,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1694284,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.345.0",
            "display1": "921 HSBa (1438441) [10 Stk]",
            "display2": "10",
            "programme": "",
            "art": "baum"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.99105",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": []
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 99105,
            "BWE_ID": 54608,
            "Nutzungsidentifikator": "LU_99105",
            "nutzungsart": 921,
            "GEO_ID": 99105,
            "anzahl_baeume": 7,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 99105,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.87.1",
            "display1": "921 HSBa (99105) [7 Stk]",
            "display2": "7",
            "programme": "",
            "art": "baum"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.161371",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": []
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 161371,
            "BWE_ID": 19596,
            "Nutzungsidentifikator": "LU_161371",
            "nutzungsart": 921,
            "GEO_ID": 161371,
            "anzahl_baeume": 15,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 161371,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.369.2",
            "display1": "921 HSBa (161371) [15 Stk]",
            "display2": "15",
            "programme": "",
            "art": "baum"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.220530",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": []
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 220530,
            "BWE_ID": 49901,
            "Nutzungsidentifikator": "LU_220530",
            "nutzungsart": 921,
            "GEO_ID": 220530,
            "anzahl_baeume": 25,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 220530,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1104.716.0",
            "display1": "921 HSBa (220530) [25 Stk]",
            "display2": "25",
            "programme": "",
            "art": "baum"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.99113",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": []
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 99113,
            "BWE_ID": 19578,
            "Nutzungsidentifikator": "LU_99113",
            "nutzungsart": 921,
            "GEO_ID": 99113,
            "anzahl_baeume": 3,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 99113,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.348.0",
            "display1": "921 HSBa (99113) [3 Stk]",
            "display2": "3",
            "programme": "",
            "art": "baum"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.99107",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": []
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 99107,
            "BWE_ID": 19521,
            "Nutzungsidentifikator": "LU_99107",
            "nutzungsart": 921,
            "GEO_ID": 99107,
            "anzahl_baeume": 8,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 99107,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.247.0",
            "display1": "921 HSBa (99107) [8 Stk]",
            "display2": "8",
            "programme": "",
            "art": "baum"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.30992",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": []
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 30992,
            "BWE_ID": 19520,
            "Nutzungsidentifikator": "LU_30992",
            "nutzungsart": 921,
            "GEO_ID": 30992,
            "anzahl_baeume": 40,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 30992,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.244.0",
            "display1": "921 HSBa (30992) [40 Stk]",
            "display2": "40",
            "programme": "",
            "art": "baum"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.99117",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": []
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 99117,
            "BWE_ID": 19657,
            "Nutzungsidentifikator": "LU_99117",
            "nutzungsart": 924,
            "GEO_ID": 99117,
            "anzahl_baeume": 1,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 99117,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.460.0",
            "display1": "924 EiBa (99117) [1 Stk]",
            "display2": "1",
            "programme": "",
            "art": "baum"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1694285",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": []
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1694285,
            "BWE_ID": 772633,
            "Nutzungsidentifikator": "LU_1694285",
            "nutzungsart": 924,
            "GEO_ID": 1438442,
            "anzahl_baeume": 4,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1694285,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1082.345.0",
            "display1": "924 EiBa (1438442) [4 Stk]",
            "display2": "4",
            "programme": "",
            "art": "baum"
          }
        },
        {
          "type": "Feature",
          "id": "T_KULTUR.1108638",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": []
          },
          "geometry_name": "KUL_GEOM",
          "properties": {
            "BTR_ID": 11050,
            "BTR_NR": atob("TFUzNjM2"),
            "KUL_ID": 1108638,
            "BWE_ID": 49918,
            "Nutzungsidentifikator": "LU_1108638",
            "nutzungsart": 924,
            "GEO_ID": 1108635,
            "anzahl_baeume": 2,
            "bewirtschaftungsgrad": null,
            "beitragsberechtigt": true,
            "ist_definitiv": false,
            "prozessStatus": true,
            "objektStatus": 2,
            "verpflichtung_von": null,
            "verpflichtung_bis": null,
            "schnittzeitpunkt": "",
            "nutzung_im_beitragsjahr": true,
            "nhg": false,
            "einzelkulturbeitrag": false,
            "lq_bemerkungen": null,
            "id_nutzung": 1108638,
            "area": null,
            "length": null,
            "Bewirtschaftungseinheit": "1104.737.0",
            "display1": "924 EiBa (1108635) [2 Stk]",
            "display2": "2",
            "programme": "",
            "art": "baum"
          }
        }
      ],
      "totalFeatures": 64,
      "numberMatched": 64,
      "numberReturned": 64,
      "timeStamp": "2020-09-04T19:29:32.103Z",
      "crs": {
        "type": "name",
        "properties": {
          "name": "urn:ogc:def:crs:EPSG::2056"
        }
      }
    };

    this.bewirtschaftungseinheiten.push(bwe);
  }

  public getUser(): User {
    const user = new User();
    user.user_id = atob('bWlnZ2kudHNjaHVkaUBiYXVlci5jaA==');
    user.username = atob('TWlnZ2kgVHNjaHVkaQ==');
    user.BTR_NR = atob('TFUzNjM2');
    return user;
  }

  public getBewirtschaftungseinheiten(user: User): Observable<Bewirtschaftungseinheit[]> {
    return of(this.bewirtschaftungseinheiten);
  }
}
