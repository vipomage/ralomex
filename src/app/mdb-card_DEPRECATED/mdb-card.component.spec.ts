import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdbCardComponent } from './mdb-card.component';

describe('MdbCardComponent', () => {
  let component: MdbCardComponent;
  let fixture: ComponentFixture<MdbCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdbCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdbCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
