import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdbSectionComponent } from './mdb-section.component';

describe('MdbSectionComponent', () => {
  let component: MdbSectionComponent;
  let fixture: ComponentFixture<MdbSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdbSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdbSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
