import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CascaderComponent } from './cascader.component';

describe('CascaderComponent', () => {
  let component: CascaderComponent;
  let fixture: ComponentFixture<CascaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CascaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CascaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
