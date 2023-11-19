import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfincasComponent } from './listfincas.component';

describe('ListfincasComponent', () => {
  let component: ListfincasComponent;
  let fixture: ComponentFixture<ListfincasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListfincasComponent]
    });
    fixture = TestBed.createComponent(ListfincasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
