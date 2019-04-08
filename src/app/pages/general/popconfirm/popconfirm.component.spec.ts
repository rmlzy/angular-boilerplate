import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopconfirmComponent } from './popconfirm.component';

describe('PopconfirmComponent', () => {
  let component: PopconfirmComponent;
  let fixture: ComponentFixture<PopconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
