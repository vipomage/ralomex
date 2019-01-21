import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdbAccordionComponent } from './mdb-accordion.component';

describe('MdbAccordionComponent', () => {
  let component: MdbAccordionComponent;
  let fixture: ComponentFixture<MdbAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdbAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdbAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
