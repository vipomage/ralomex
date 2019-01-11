import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PloughsComponent } from './ploughs.component';

describe('PloughsComponent', () => {
  let component: PloughsComponent;
  let fixture: ComponentFixture<PloughsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PloughsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PloughsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
