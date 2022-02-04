import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPOCComponent } from './map-poc.component';

describe('MapPOCComponent', () => {
  let component: MapPOCComponent;
  let fixture: ComponentFixture<MapPOCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapPOCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapPOCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
