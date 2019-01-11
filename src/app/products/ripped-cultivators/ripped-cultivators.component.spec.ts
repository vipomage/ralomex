import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RippedCultivatorsComponent } from './ripped-cultivators.component';

describe('RippedCultivatorsComponent', () => {
  let component: RippedCultivatorsComponent;
  let fixture: ComponentFixture<RippedCultivatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RippedCultivatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RippedCultivatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
