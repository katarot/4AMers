import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetPostingComponent } from './pet-posting.component';

describe('PetPostingComponent', () => {
  let component: PetPostingComponent;
  let fixture: ComponentFixture<PetPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
