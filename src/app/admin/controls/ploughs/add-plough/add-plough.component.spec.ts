import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPloughComponent } from './add-plough.component';

describe('AddPloughComponent', () => {
  let component: AddPloughComponent;
  let fixture: ComponentFixture<AddPloughComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPloughComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPloughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
