import { Component } from "@angular/core";

interface IFormData {
  name: string;
  tags?: string[];
}

@Component({
  selector: "app-custom-components",
  templateUrl: "./custom-components.component.html",
  styleUrls: ["./custom-components.component.less"],
})
export class CustomComponentsComponent {
  formData: IFormData = {
    name: "rmlzy",
    tags: ["90后", "程序员"],
  };
  code = "";

  constructor() {}

  reset() {
    this.code = "";
    this.formData = {
      name: "",
      tags: [],
    };
  }

  async submit() {
    this.code = JSON.stringify(this.formData, null, "\t");
  }
}
