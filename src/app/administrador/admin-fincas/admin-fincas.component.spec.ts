import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFincasComponent } from './admin-fincas.component';

describe('AdminFincasComponent', () => {
  let component: AdminFincasComponent;
  let fixture: ComponentFixture<AdminFincasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminFincasComponent]
    });
    fixture = TestBed.createComponent(AdminFincasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
