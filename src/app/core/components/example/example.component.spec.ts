import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { ExampleComponent } from "./example.component";

describe("ExampleComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExampleComponent],
    }).compileComponents();
  });

  it("should className correct", () => {
    const fixture = TestBed.createComponent(ExampleComponent);
    const cmpt = fixture.debugElement.query(By.css(".example"));
    fixture.detectChanges();
    expect(cmpt).toBeTruthy();
  });

  it("should theme work", () => {
    const fixture = TestBed.createComponent(ExampleComponent);
    const cmpt = fixture.debugElement.query(By.css(".is-dark"));
    const cmptIns = fixture.componentInstance;
    cmptIns.theme = "dark";
    fixture.detectChanges();
    expect(cmpt).toBeTruthy();
  });
});

@Component({
  template: `<example>
    <h1>H1</h1>
  </example>`,
})
class TestExampleComponent {}
