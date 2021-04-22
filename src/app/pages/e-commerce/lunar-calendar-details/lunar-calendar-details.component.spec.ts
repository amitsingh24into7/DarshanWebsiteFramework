import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunarCalendarDetailsComponent } from './lunar-calendar-details.component';

describe('LunarCalendarDetailsComponent', () => {
  let component: LunarCalendarDetailsComponent;
  let fixture: ComponentFixture<LunarCalendarDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunarCalendarDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunarCalendarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
