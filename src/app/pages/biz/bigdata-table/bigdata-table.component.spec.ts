import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigdataTableComponent } from './bigdata-table.component';

describe('BigdataTableComponent', () => {
  let component: BigdataTableComponent;
  let fixture: ComponentFixture<BigdataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigdataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigdataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
