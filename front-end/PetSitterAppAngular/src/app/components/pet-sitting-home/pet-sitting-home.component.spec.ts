import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetSittingHomeComponent } from './pet-sitting-home.component';

describe('PetSittingHomeComponent', () => {
  let component: PetSittingHomeComponent;
  let fixture: ComponentFixture<PetSittingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetSittingHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetSittingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
