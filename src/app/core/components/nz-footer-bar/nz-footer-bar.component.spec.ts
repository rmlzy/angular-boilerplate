import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { NzFooterBarComponent } from "./nz-footer-bar.component";

describe("NzFooterBarComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NzFooterBarComponent],
    }).compileComponents();
  });

  it("should className correct", () => {
    const fixture = TestBed.createComponent(NzFooterBarComponent);
    fixture.detectChanges();
    const cmpt = fixture.debugElement.query(By.css(".nz-footer-bar")).nativeElement;
    expect(cmpt).toBeTruthy();
  });
});
