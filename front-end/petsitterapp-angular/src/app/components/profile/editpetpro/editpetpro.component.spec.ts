import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpetproComponent } from './editpetpro.component';

describe('EditpetproComponent', () => {
  let component: EditpetproComponent;
  let fixture: ComponentFixture<EditpetproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpetproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpetproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
