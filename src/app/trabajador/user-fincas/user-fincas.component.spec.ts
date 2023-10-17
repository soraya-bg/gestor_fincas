import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFincasComponent } from './user-fincas.component';

describe('UserFincasComponent', () => {
  let component: UserFincasComponent;
  let fixture: ComponentFixture<UserFincasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFincasComponent]
    });
    fixture = TestBed.createComponent(UserFincasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
