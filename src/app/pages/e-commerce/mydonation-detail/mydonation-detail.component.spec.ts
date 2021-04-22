import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydonationDetailComponent } from './mydonation-detail.component';

describe('MydonationDetailComponent', () => {
  let component: MydonationDetailComponent;
  let fixture: ComponentFixture<MydonationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydonationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydonationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
