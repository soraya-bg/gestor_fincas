import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfincasComponent } from './addfincas.component';

describe('AddfincasComponent', () => {
  let component: AddfincasComponent;
  let fixture: ComponentFixture<AddfincasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddfincasComponent]
    });
    fixture = TestBed.createComponent(AddfincasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
