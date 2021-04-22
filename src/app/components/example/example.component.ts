import { Component, Input, OnInit } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "div[example]",
  templateUrl: "./example.component.html",
  styleUrls: ["./example.component.less"],
})
export class ExampleComponent implements OnInit {
  @Input() theme = "light";

  constructor() {}

  ngOnInit(): void {}
}
