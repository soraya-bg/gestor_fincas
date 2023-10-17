import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGanadoComponent } from './admin-ganado.component';

describe('AdminGanadoComponent', () => {
  let component: AdminGanadoComponent;
  let fixture: ComponentFixture<AdminGanadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminGanadoComponent]
    });
    fixture = TestBed.createComponent(AdminGanadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
