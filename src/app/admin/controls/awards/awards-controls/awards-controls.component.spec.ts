import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsControlsComponent } from './awards-controls.component';

describe('AwardsControlsComponent', () => {
  let component: AwardsControlsComponent;
  let fixture: ComponentFixture<AwardsControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardsControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardsControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
