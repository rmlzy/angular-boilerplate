import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdateBtnComponent } from './user-update-btn.component';

describe('UserUpdateBtnComponent', () => {
  let component: UserUpdateBtnComponent;
  let fixture: ComponentFixture<UserUpdateBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserUpdateBtnComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUpdateBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
