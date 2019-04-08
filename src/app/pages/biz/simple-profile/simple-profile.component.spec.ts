import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleProfileComponent } from './simple-profile.component';

describe('SimpleProfileComponent', () => {
  let component: SimpleProfileComponent;
  let fixture: ComponentFixture<SimpleProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
