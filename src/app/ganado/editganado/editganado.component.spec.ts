import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditganadoComponent } from './editganado.component';

describe('EditganadoComponent', () => {
  let component: EditganadoComponent;
  let fixture: ComponentFixture<EditganadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditganadoComponent]
    });
    fixture = TestBed.createComponent(EditganadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
