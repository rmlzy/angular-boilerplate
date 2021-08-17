import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-buttons",
  templateUrl: "./buttons.component.html",
  styleUrls: ["./buttons.component.less"],
})
export class ButtonsComponent implements OnInit {
  standardCode = `<button nz-button nzType="primary">Primary Button</button>
<button nz-button nzType="default">Default Button</button>
<button nz-button nzType="dashed">Dashed Button</button>
<button nz-button nzType="text">Text Button</button>
<button nz-button nzDanger>Danger Button</button>`;

  ghostCode = `<button nz-button [nzGhost]="true" nzType="primary">Primary Button</button>
<button nz-button [nzGhost]="true" nzType="default">Default Button</button>
<button nz-button [nzGhost]="true" nzType="dashed">Dashed Button</button>
<button nz-button [nzGhost]="true" nzType="text">Text Button</button>
<button nz-button [nzGhost]="true" nzDanger>Danger Button</button>`;

  circleCode = `<button nz-button nzShape="circle" nzType="primary">
  <i nz-icon nzType="download"></i>
</button>
<button nz-button nzShape="circle" nzType="default">
  <i nz-icon nzType="download"></i>
</button>
<button nz-button nzShape="circle" nzType="dashed">
  <i nz-icon nzType="download"></i>
</button>
<button nz-button nzShape="circle" nzType="text">
  <i nz-icon nzType="download"></i>
</button>
<button nz-button nzShape="circle" nzDanger>
  <i nz-icon nzType="download"></i>
</button>`;

  roundCode = `<button nz-button nzShape="round" nzType="primary">
  <i nz-icon nzType="download"></i>
</button>
<button nz-button nzShape="round" nzType="default">
  <i nz-icon nzType="download"></i>
</button>
<button nz-button nzShape="round" nzType="dashed">
  <i nz-icon nzType="download"></i>
</button>
<button nz-button nzShape="round" nzType="text">
  <i nz-icon nzType="download"></i>
</button>
<button nz-button nzShape="round" nzDanger>
  <i nz-icon nzType="download"></i>
</button>`;

  constructor() {}

  ngOnInit(): void {}
}
