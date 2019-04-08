import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UeditorComponent } from './ueditor.component';

describe('UeditorComponent', () => {
  let component: UeditorComponent;
  let fixture: ComponentFixture<UeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
