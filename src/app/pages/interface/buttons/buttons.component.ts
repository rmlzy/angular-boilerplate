import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-buttons",
  templateUrl: "./buttons.component.html",
  styleUrls: ["./buttons.component.less"],
})
export class ButtonsComponent implements OnInit {
  code1 = `<button nz-button nzType="primary">Primary Button</button>
<button nz-button nzType="default">Default Button</button>
<button nz-button nzType="dashed">Dashed Button</button>
<button nz-button nzType="text">Text Button</button>
<a nz-button nzType="link">Link Button</a>`;

  constructor() {}

  ngOnInit(): void {}
}
