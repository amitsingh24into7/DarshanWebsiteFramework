import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultActivComponent } from './cult-activ.component';

describe('CultActivComponent', () => {
  let component: CultActivComponent;
  let fixture: ComponentFixture<CultActivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultActivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultActivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
