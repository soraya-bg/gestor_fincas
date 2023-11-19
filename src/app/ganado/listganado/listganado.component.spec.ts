import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListganadoComponent } from './listganado.component';

describe('ListganadoComponent', () => {
  let component: ListganadoComponent;
  let fixture: ComponentFixture<ListganadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListganadoComponent]
    });
    fixture = TestBed.createComponent(ListganadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
