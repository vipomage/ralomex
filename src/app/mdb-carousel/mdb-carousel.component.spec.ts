import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdbCarouselComponent } from './mdb-carousel.component';

describe('MdbCarouselComponent', () => {
  let component: MdbCarouselComponent;
  let fixture: ComponentFixture<MdbCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdbCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdbCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
