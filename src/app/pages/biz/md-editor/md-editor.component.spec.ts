import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdEditorComponent } from './md-editor.component';

describe('MdEditorComponent', () => {
  let component: MdEditorComponent;
  let fixture: ComponentFixture<MdEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
