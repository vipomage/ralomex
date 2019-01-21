import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdbNewsComponent } from './mdb-news.component';

describe('MdbNewsComponent', () => {
  let component: MdbNewsComponent;
  let fixture: ComponentFixture<MdbNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdbNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdbNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
