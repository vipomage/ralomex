import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RippersComponent } from './rippers.component';

describe('RippersComponent', () => {
  let component: RippersComponent;
  let fixture: ComponentFixture<RippersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RippersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RippersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
