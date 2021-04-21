import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.less"],
})
export class AccordionComponent implements OnInit {
  panels = [
    {
      active: true,
      name: "This is panel header 1",
      disabled: false,
    },
    {
      active: false,
      disabled: false,
      name: "This is panel header 2",
    },
    {
      active: false,
      disabled: true,
      name: "This is panel header 3",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
