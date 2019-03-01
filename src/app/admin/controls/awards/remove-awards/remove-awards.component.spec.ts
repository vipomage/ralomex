import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAwardsComponent } from './remove-awards.component';

describe('RemoveAwardsComponent', () => {
  let component: RemoveAwardsComponent;
  let fixture: ComponentFixture<RemoveAwardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveAwardsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
