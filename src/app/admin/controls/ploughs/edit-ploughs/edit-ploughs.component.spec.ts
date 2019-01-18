import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPloughsComponent } from './edit-ploughs.component';

describe('EditPloughsComponent', () => {
  let component: EditPloughsComponent;
  let fixture: ComponentFixture<EditPloughsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPloughsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPloughsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
