import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PloughControlsComponent } from './plough-controls.component';

describe('PloughControlsComponent', () => {
  let component: PloughControlsComponent;
  let fixture: ComponentFixture<PloughControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PloughControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PloughControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
