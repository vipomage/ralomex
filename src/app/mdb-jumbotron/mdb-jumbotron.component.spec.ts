import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdbJumbotronComponent } from './mdb-jumbotron.component';

describe('MdbJumbotronComponent', () => {
  let component: MdbJumbotronComponent;
  let fixture: ComponentFixture<MdbJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdbJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdbJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
