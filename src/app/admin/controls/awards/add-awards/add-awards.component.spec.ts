import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAwardsComponent } from './add-awards.component';

describe('AddAwardsComponent', () => {
  let component: AddAwardsComponent;
  let fixture: ComponentFixture<AddAwardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAwardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
