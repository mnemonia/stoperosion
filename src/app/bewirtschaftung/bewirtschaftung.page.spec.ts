import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BewirtschaftungPage } from './bewirtschaftung.page';

describe('BewirtschaftungPage', () => {
  let component: BewirtschaftungPage;
  let fixture: ComponentFixture<BewirtschaftungPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BewirtschaftungPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BewirtschaftungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
