import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAwardsComponent } from './edit-awards.component';

describe('EditAwardsComponent', () => {
  let component: EditAwardsComponent;
  let fixture: ComponentFixture<EditAwardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAwardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
