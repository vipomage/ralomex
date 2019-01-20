import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdbFooterComponent } from './mdb-footer.component';

describe('MdbFooterComponent', () => {
  let component: MdbFooterComponent;
  let fixture: ComponentFixture<MdbFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdbFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdbFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
