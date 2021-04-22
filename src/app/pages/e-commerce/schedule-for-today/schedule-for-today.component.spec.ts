import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleForTodayComponent } from './schedule-for-today.component';

describe('ScheduleForTodayComponent', () => {
  let component: ScheduleForTodayComponent;
  let fixture: ComponentFixture<ScheduleForTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleForTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleForTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
