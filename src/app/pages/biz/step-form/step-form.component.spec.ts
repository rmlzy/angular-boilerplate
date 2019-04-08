import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFormComponent } from './step-form.component';

describe('StepFormComponent', () => {
  let component: StepFormComponent;
  let fixture: ComponentFixture<StepFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
