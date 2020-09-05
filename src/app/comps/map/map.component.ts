import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {GeoApiService} from '../../services/geoapi/geo-api.service';

declare var ga;
declare var ol;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @ViewChild('swissMap2', {static: true}) mapElement: ElementRef;
  //@ViewChild('geolocationControl', {static: true}) geolocationControlElement: ElementRef;
  //@ViewChild('mapZoomPlus', {static: true}) mapZoomPlusElement: ElementRef;
  //@ViewChild('mapZoomMinus', {static: true}) mapZoomMinusElement: ElementRef;
  //@ViewChild('frameAllBuildingsControl', {static: true}) frameAllBuildingsControlElement: ElementRef;

  private currentLayer = null;
  public mapObject;
  private _mapData;
  private isSwissimageVisible = false;
  private swisstopo;
  private solarLayer;
  public swissImageControlColor = 'primary';
  private _mapCenter = [2646940.72, 1226832.61]; // E=&N=
  private geojsonObject;
  private vectorLayer;

  @Output() onMapEvent = new EventEmitter();
  @Output() onMapMoveEvent = new EventEmitter();
  @Output() onFrameAllBuildingsEvent = new EventEmitter();
  @Input() isShowSelection = true;
  private _mapResolution = 0.25;
  @Input() mapResolution(res) {
    this._mapResolution = res;
    if (this.mapObject === undefined) {
      return;
    }
    this.mapObject.getView().setResolution(this._mapResolution);
  }
  private _mapZoom = 0.25;
  @Input() mapZoom(res) {
    this._mapZoom = res;
    if (this.mapObject === undefined) {
      return;
    }
    this.mapObject.getView().setZoom(this._mapZoom);
  }
  @Input()
  set mapCenter(mc: number[]) {
    this._mapCenter = mc;
    if (this.mapObject === undefined) {
      return;
    }
    this.mapObject.getView().setCenter(this._mapCenter);
  }
  get mapCenter() {return this._mapCenter;}
  @Input()
  set mapData(res: any) {
    this._mapData = res;
    if (res.geometry === undefined) {
      console.log('no geomerty', res);
      return;
    }
    this.addDataToSolarRoofLayer(res.geometry.rings, res.bbox);
  }
  get mapData() {
    return this._mapData;
  }

  areaStyle = new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(0, 255, 0, 0.3)'
    }),
    stroke: new ol.style.Stroke({
      color: '#00FF00',
      width: 2
    })
  });

  @Input()
  set areaColor(color: string) {
    console.log(color);
    this.areaStyle = new ol.style.Style({
      fill: new ol.style.Fill({
        color: 'rgba(29,187,255,0.3)'
      }),
      stroke: new ol.style.Stroke({
        color: color,
        width: 2.5
      })
    });
    if (this.vectorLayer) {
      this.removeGeojaonLayer();
      this.addGeojaonLayer();
    }
  }


  @Input()
  set areaGeoJson(geojsonObject: any) {
    if (geojsonObject === null) {
      return;
    }
    if(this.vectorLayer){
      this.removeGeojaonLayer();
    }
    this.geojsonObject = geojsonObject;
    this.addGeojaonLayer();
  }
  get areaGeoJson() {
    return this.geojsonObject;
  }



  private addDataToSolarRoofLayer(rings: any[], bbox) {
    if (this.currentLayer !== null) {
      this.mapObject.removeLayer(this.currentLayer);
    }
    if (rings.length === 0) {
      return;
    }
    if (this.mapObject === undefined) {
      setTimeout(() => {
        this.addDataToSolarRoofLayer(rings, bbox);
      }, 1500);
      return;
    }

    // const polygon2 = new ol.geom.Polygon(
    //     [[[res.bbox[0], res.bbox[3]],
    //         [res.bbox[0], res.bbox[1]],
    //         [res.bbox[2], res.bbox[1]],
    //         [res.bbox[2], res.bbox[3]],
    //         [res.bbox[0], res.bbox[3]]]]
    // );
    // var polygon = new ol.geom.Polygon(
    //     [[[west, north],
    //       [west, south],
    //       [east, south],
    //       [east, north],
    //       [west, north]]]
    // );
    // $("#north").val(Math.round(bbox[3]));
    // $("#south").val(Math.round(bbox[1]));
    // $("#east").val(Math.round(bbox[2]));
    // $("#west").val(Math.round(bbox[0]));
    // https://codepen.io/geoadmin/pen/NxQmvo?editors=0010

    const polygon = new ol.geom.Polygon(rings);
    // const polygon2 = new ol.geom.Polygon(
    //     [[[bbox[0], bbox[3]],
    //         [bbox[0], bbox[1]],
    //         [bbox[2], bbox[1]],
    //         [bbox[2], bbox[3]],
    //         [bbox[0], bbox[3]]]]
    // );

    const vectorLayer = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: [new ol.Feature({
          geometry: polygon
        })]
      }),
      style: this.areaStyle
    });
    this.mapObject.addLayer(vectorLayer);
    this.currentLayer = vectorLayer;
    this.mapObject.renderSync();
  }

  constructor(private geoApiService: GeoApiService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.loadMap();
      setTimeout(() => {
        // this.mapData = this._mapData;
      }, 1500);
    }, 650);
  }

  public onClickInMap(event) {
    this.onMapEvent.emit(event);
  }

  private loadMap() {
    // console.log(this.mapElement);
    const boxStyle = new ol.style.Style({
      fill: new ol.style.Fill({
        color: 'rgba(0, 255, 0, 0.3)'
      }),
      stroke: new ol.style.Stroke({
        color: '#ff2ed4',
        width: 2
      })
    });
    // const createLayer = (layername, timestamp) => {
    //     return new ol.layer.Tile({
    //         source: new ol.source.XYZ({
    //             attributions: [
    //                 new ol.Attribution({
    //                     html: '<a target="new" href="https://www.swisstopo.admin.ch/' +
    //                         'internet/swisstopo/en/home.html">swisstopo</a>'
    //                 })
    //             ],
    //             url: 'https://wmts10.geo.admin.ch/1.0.0/' + layername + '/default/' + timestamp + '/3857/{z}/{x}/{y}.jpeg'
    //         })
    //     });
    // };

    this.mapObject = new ga.Map({

      // Define the div where the map is placed
      target: 'swissMap2',
      // layers: [
      //     //createLayer('ch.swisstopo.swissimage', 'current')
      //     createLayer('ch.swisstopo.pixelkarte-grau', 'current')
      // ],
      // Create a view
      view: new ol.View({
        // Define the default resolution
        // 10 means that one pixel is 10m width and height
        // List of resolution of the WMTS layers:
        // 650, 500, 250, 100, 50, 20, 10, 5, 2.5, 2, 1, 0.5, 0.25, 0.1
        resolution: 2.5, //this.mapResolution, //0.5, //20,

        // Define a coordinate CH1903+ (EPSG:2056) for the center of the view
        center: this._mapCenter
      })
    });
    this.mapObject.disableTooltip();
    this.mapObject.on('click', ($event) => {
      console.log("map click", $event);
      this.onClickInMap($event);
    });
    this.mapObject.on('moveend', ($event) => {
      console.warn('map drag', $event);
      this.onMapMoveEvent.emit($event);
    });

    // Create a background layer
    //const lyr1 = ga.layer.create('ch.swisstopo.pixelkarte-farbe');
    //const lyr3 = ga.layer.create('ch.swisstopo.swissimage');
    // const lyr3 = ga.layer.create('ch.swisstopo.pixelkarte-grau');
    //const lyr3 = ga.layer.create('ch.swisstopo.leichte-basiskarte.vt');
    //const lyr1 = ga.layer.create('ch.swisstopo.landeskarte-grau-10', {opacity: 0.6});
    // const lyr1 = ga.layer.create('ch.swisstopo.pixelkarte-grau', {opacity: 0.6});
    // this.mapObject.addLayer(lyr1);
    this.swisstopo = ga.layer.create('ch.swisstopo.swissimage', {opacity: 0.6});
    this.swisstopo.setVisible(true);
    this.mapObject.addLayer(this.swisstopo);
    // ch.blw.erosion,ch.blw.erosion-quantitativ,ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill,ch.kantone.cadastralwebmap-farbe,ch.blw.feldblockkarte
    // this.addSolarRoofLayer();
    const lyr3 = ga.layer.create('ch.blw.erosion');
    this.mapObject.addLayer(lyr3);
    const lyr4 = ga.layer.create('ch.blw.erosion-quantitativ');
    this.mapObject.addLayer(lyr4);
    const lyr5 = ga.layer.create('ch.blw.feldblockkarte');
    this.mapObject.addLayer(lyr5);
    //const geojson = new ol.format.GeoJSON();
    //geojson.readFeatures();
    //const lyr3 = ga.layer.create('ch.swisstopo-vd.geometa-gemeinde');
    //this.mapObject.addLayer(lyr3);

    this.mapObject.getControls().forEach(c => {
      this.mapObject.removeControl(c);
    });
    // this.mapObject.addControl(new ol.control.Control({
    //     element: this.mapZoomPlusElement.nativeElement
    // }));
    // this.mapObject.addControl(new ol.control.Control({
    //     element: this.mapZoomMinusElement.nativeElement
    // }));
    // this.mapObject.addControl(new ol.control.Control({
    //     element: this.geolocationControlElement.nativeElement
    // }));
    // this.mapObject.addControl(new ol.control.Control({
    //     element: this.frameAllBuildingsControlElement.nativeElement
    // }));

  }

  private addSolarRoofLayer() {
    if (this.solarLayer !== undefined) {
      this.mapObject.removeLayer(this.solarLayer);
    }
    //this.solarLayer = ga.layer.create('ch.bfe.solarenergie-eignung-daecher', {opacity: 0.5});
    //this.mapObject.addLayer(this.solarLayer);
  }

  public locateMe(event) {
    console.log('locate me', event);
    this.mapObject.getView().setRotation(0);
    this.mapObject.getView().setResolution(0.5);
    this.mapObject.getView().setCenter([2723796.8597967187, 1211314.662645912]);
  }

  public relocate(coordinate) {
    if (this.mapObject === undefined) {
      setTimeout(() => {
        this.relocate(coordinate);
      }, 1000);
      return;
    }
    const position = ol.proj.fromLonLat(coordinate, 'EPSG:2056');
    this.mapObject.getView().setRotation(0);
    this.mapObject.getView().setResolution(0.25);
    this.mapObject.getView().setCenter(position);
    this.mapElement.nativeElement.click();
  }

  public zoom(direction) {
    let zoomValue = this.mapObject.getView().getZoom();
    const increment = 0.2;
    if (direction === 'plus') {
      zoomValue += increment;
    } else {
      zoomValue -= increment;
    }
    this.mapObject.getView().setZoom(zoomValue);
  }
  public distance(zoomValue) {
    this.mapObject.getView().setResolution(zoomValue);
  }

  addGeojaonLayer() {
    if (!this.geojsonObject) {
      return;
    }
    const boxStyle = new ol.style.Style({
      fill: new ol.style.Fill({
        color: 'rgba(0, 255, 0, 0.3)'
      }),
      stroke: new ol.style.Stroke({
        color: '#ff2ed4',
        width: 2
      })
    });
    const vectorSource = new ol.source.Vector({
      features: new ol.format.GeoJSON().readFeatures(this.geojsonObject),
    });
    this.vectorLayer = new ol.layer.Vector({
      source: vectorSource,
      style: this.areaStyle,
    });
    if(this.mapObject) {
      this.mapObject.addLayer(this.vectorLayer);
    }
  }
  removeGeojaonLayer() {
    if (this.vectorLayer && this.mapObject) {
      this.mapObject.removeLayer(this.vectorLayer);
    }
  }

  public frameAllBuildings(event) {
    this.onFrameAllBuildingsEvent.emit(event);
  }

  public toggleSwissimage(event) {
    this.isSwissimageVisible = !this.isSwissimageVisible;
    this.swisstopo.setVisible(this.isSwissimageVisible);
    if (this.isSwissimageVisible) {
      this.solarLayer.setOpacity(0.2);
      this.swissImageControlColor = 'secondary';
    } else {
      this.solarLayer.setOpacity(0.6);
      this.swissImageControlColor = 'primary';
    }

  }

}
