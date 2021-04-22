import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleForNextxDaysComponent } from './schedule-for-nextx-days.component';

describe('ScheduleForNextxDaysComponent', () => {
  let component: ScheduleForNextxDaysComponent;
  let fixture: ComponentFixture<ScheduleForNextxDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleForNextxDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleForNextxDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
