import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfincasComponent } from './editfincas.component';

describe('EditfincasComponent', () => {
  let component: EditfincasComponent;
  let fixture: ComponentFixture<EditfincasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditfincasComponent]
    });
    fixture = TestBed.createComponent(EditfincasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
