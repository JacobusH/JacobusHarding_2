import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlxTrackerComponent } from './mlx-tracker.component';

describe('MlxTrackerComponent', () => {
  let component: MlxTrackerComponent;
  let fixture: ComponentFixture<MlxTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlxTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlxTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
