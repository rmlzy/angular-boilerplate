import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NzMessageService } from "ng-zorro-antd/message";

@Component({
  selector: "app-basic",
  templateUrl: "./basic.component.html",
  styleUrls: ["./basic.component.less"],
})
export class BasicComponent implements OnInit {
  submitting = false;
  basicForm!: FormGroup;

  constructor(private fb: FormBuilder, private message: NzMessageService) {}

  ngOnInit() {
    this.basicForm = this.fb.group({
      title: ["", [Validators.required]],
      range: [null, [Validators.required]],
      goal: ["", [Validators.required]],
      standard: ["", [Validators.required]],
      client: [""],
      invites: [""],
      weight: [""],
      publicType: ["1"],
    });
  }

  async submit(): Promise<void> {
    for (const i in this.basicForm.controls) {
      this.basicForm.controls[i].markAsDirty();
      this.basicForm.controls[i].updateValueAndValidity();
    }
    if (!this.basicForm.valid) {
      return;
    }
    console.log("Basic Form 提交:", this.basicForm.value);
    this.message.success("操作成功");
  }
}
