import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryDevotionalComponent } from './gallery-devotional.component';

describe('GalleryDevotionalComponent', () => {
  let component: GalleryDevotionalComponent;
  let fixture: ComponentFixture<GalleryDevotionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryDevotionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryDevotionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
