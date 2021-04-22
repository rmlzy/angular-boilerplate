import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { NzFormTooltipIcon } from "ng-zorro-antd/form";

@Component({
  selector: "app-basic",
  templateUrl: "./basic.component.html",
  styleUrls: ["./basic.component.less"],
})
export class BasicComponent implements OnInit {
  submitting = false;
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      title: ["", [Validators.required]],
      goal: ["", [Validators.required]],
      standard: ["", [Validators.required]],
      client: [""],
      invites: [""],
      weight: [""],
      publicType: ["1"],
    });
  }

  async submit(): Promise<void> {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }
  }
}
