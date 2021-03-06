import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MLXTrackerComponent } from './mlx-tracker.component';

describe('MlxTrackerComponent', () => {
  let component: MLXTrackerComponent;
  let fixture: ComponentFixture<MLXTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MLXTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MLXTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
