import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBodyComponent } from './app-body.component';

describe('AppBodyComponent', () => {
  let component: AppBodyComponent;
  let fixture: ComponentFixture<AppBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppBodyComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
