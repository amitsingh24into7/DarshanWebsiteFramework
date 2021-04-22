import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardServiceListComponent } from './dashboard-service-list.component';

describe('DashboardServiceListComponent', () => {
  let component: DashboardServiceListComponent;
  let fixture: ComponentFixture<DashboardServiceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardServiceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
