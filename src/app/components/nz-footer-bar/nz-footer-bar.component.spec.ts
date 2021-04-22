import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NzFooterBarComponent } from "./nz-footer-bar.component";

describe("NzFooterBarComponent", () => {
  let component: NzFooterBarComponent;
  let fixture: ComponentFixture<NzFooterBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NzFooterBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NzFooterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
