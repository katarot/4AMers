import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpetprofileComponent } from './addpetprofile.component';

describe('AddpetprofileComponent', () => {
  let component: AddpetprofileComponent;
  let fixture: ComponentFixture<AddpetprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpetprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpetprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
