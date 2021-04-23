import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NzMessageService } from "ng-zorro-antd/message";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.less"],
})
export class SettingsComponent implements OnInit {
  settingForm!: FormGroup;

  constructor(private fb: FormBuilder, private message: NzMessageService) {}

  ngOnInit(): void {
    this.settingForm = this.fb.group({
      repoName: ["", [Validators.required]],
      repoUrl: ["", [Validators.required]],
      repoOwner: ["", [Validators.required]],
      repoApprover: ["", [Validators.required]],
      repoDateRange: [null, [Validators.required]],
      repoType: ["", [Validators.required]],

      jobName: ["", [Validators.required]],
      jobDesc: ["", [Validators.required]],
      jobOwner: ["", [Validators.required]],
      jobManager: ["", [Validators.required]],
      remindDate: [null, [Validators.required]],
      jobType: ["", [Validators.required]],
    });
  }

  async submit(): Promise<void> {
    for (const i in this.settingForm.controls) {
      this.settingForm.controls[i].markAsDirty();
      this.settingForm.controls[i].updateValueAndValidity();
    }
    if (!this.settingForm.valid) {
      return;
    }
    console.log("Advanced Form 提交:", this.settingForm.value);
    this.message.success("操作成功");
  }
}
