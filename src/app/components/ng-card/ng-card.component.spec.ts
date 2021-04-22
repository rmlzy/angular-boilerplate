import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NgCardComponent } from "./ng-card.component";

describe("NgCardComponent", () => {
  let component: NgCardComponent;
  let fixture: ComponentFixture<NgCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
