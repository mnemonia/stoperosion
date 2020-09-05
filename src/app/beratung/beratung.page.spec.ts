import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeratungPage } from './beratung.page';

describe('BeratungPage', () => {
  let component: BeratungPage;
  let fixture: ComponentFixture<BeratungPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeratungPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeratungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
