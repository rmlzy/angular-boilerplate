import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "div[example]",
  templateUrl: "./example.component.html",
  styleUrls: ["./example.component.less"],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
})
export class ExampleComponent implements OnInit {
  @Input() theme = "light";

  constructor() {}

  ngOnInit(): void {}
}
