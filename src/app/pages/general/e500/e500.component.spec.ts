import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E500Component } from './e500.component';

describe('E500Component', () => {
  let component: E500Component;
  let fixture: ComponentFixture<E500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E500Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(E500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
