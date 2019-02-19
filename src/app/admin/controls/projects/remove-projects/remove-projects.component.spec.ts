import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveProjectsComponent } from './remove-projects.component';

describe('RemoveProjectsComponent', () => {
  let component: RemoveProjectsComponent;
  let fixture: ComponentFixture<RemoveProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
