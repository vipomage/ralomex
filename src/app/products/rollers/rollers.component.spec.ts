import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollersComponent } from './rollers.component';

describe('RollersComponent', () => {
  let component: RollersComponent;
  let fixture: ComponentFixture<RollersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
