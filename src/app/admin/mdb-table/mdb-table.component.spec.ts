import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdbTableComponent } from './mdb-table.component';

describe('MdbTableComponent', () => {
  let component: MdbTableComponent;
  let fixture: ComponentFixture<MdbTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdbTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdbTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
