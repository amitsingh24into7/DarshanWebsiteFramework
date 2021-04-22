import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationModelpageComponent } from './donation-modelpage.component';

describe('DonationModelpageComponent', () => {
  let component: DonationModelpageComponent;
  let fixture: ComponentFixture<DonationModelpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationModelpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationModelpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
