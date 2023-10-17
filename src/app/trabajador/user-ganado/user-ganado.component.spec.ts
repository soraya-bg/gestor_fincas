import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGanadoComponent } from './user-ganado.component';

describe('UserGanadoComponent', () => {
  let component: UserGanadoComponent;
  let fixture: ComponentFixture<UserGanadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserGanadoComponent]
    });
    fixture = TestBed.createComponent(UserGanadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
