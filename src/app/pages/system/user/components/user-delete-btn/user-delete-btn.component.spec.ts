import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeleteBtnComponent } from './user-delete-btn.component';

describe('UserDeleteBtnComponent', () => {
  let component: UserDeleteBtnComponent;
  let fixture: ComponentFixture<UserDeleteBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDeleteBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDeleteBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
