import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestboardComponent } from './requestboard.component';

describe('RequestboardComponent', () => {
  let component: RequestboardComponent;
  let fixture: ComponentFixture<RequestboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
