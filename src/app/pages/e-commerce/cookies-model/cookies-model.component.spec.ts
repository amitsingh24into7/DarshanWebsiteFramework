import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesModelComponent } from './cookies-model.component';

describe('CookiesModelComponent', () => {
  let component: CookiesModelComponent;
  let fixture: ComponentFixture<CookiesModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookiesModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiesModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
