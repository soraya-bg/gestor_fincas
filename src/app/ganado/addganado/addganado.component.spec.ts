import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddganadoComponent } from './addganado.component';

describe('AddganadoComponent', () => {
  let component: AddganadoComponent;
  let fixture: ComponentFixture<AddganadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddganadoComponent]
    });
    fixture = TestBed.createComponent(AddganadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
