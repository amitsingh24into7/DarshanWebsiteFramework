import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleTimingsComponent } from './temple-timings.component';

describe('TempleTimingsComponent', () => {
  let component: TempleTimingsComponent;
  let fixture: ComponentFixture<TempleTimingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempleTimingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleTimingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
