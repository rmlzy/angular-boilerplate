import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedProfileComponent } from './advanced-profile.component';

describe('AdvancedProfileComponent', () => {
  let component: AdvancedProfileComponent;
  let fixture: ComponentFixture<AdvancedProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
