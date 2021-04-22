import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAnnouncementsComponent } from './dashboard-announcements.component';

describe('DashboardAnnouncementsComponent', () => {
  let component: DashboardAnnouncementsComponent;
  let fixture: ComponentFixture<DashboardAnnouncementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAnnouncementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
