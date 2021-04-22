import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfamilymemberComponent } from './addfamilymember.component';

describe('AddfamilymemberComponent', () => {
  let component: AddfamilymemberComponent;
  let fixture: ComponentFixture<AddfamilymemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfamilymemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfamilymemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
