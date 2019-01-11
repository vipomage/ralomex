import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShreddersComponent } from './shredders.component';

describe('ShreddersComponent', () => {
  let component: ShreddersComponent;
  let fixture: ComponentFixture<ShreddersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShreddersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShreddersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
