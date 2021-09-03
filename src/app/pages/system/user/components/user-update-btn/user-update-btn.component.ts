import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'user-update-btn',
  templateUrl: './user-update-btn.component.html',
  styleUrls: ['./user-update-btn.component.less'],
})
export class UserUpdateBtnComponent implements OnInit {
  @Input() id: number = 0;
  @Output() refresh = new EventEmitter<string>();

  mounting = false;
  visible = false;
  submitting = false;
  userForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      realname: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }

  showCreateDrawer(): void {
    this.visible = true;
  }

  async showUpdateDrawer() {
    this.visible = true;
    this.mounting = true;
    try {
      const formData = await this.userService.refill(this.id);
      this.userForm.setValue(formData);
    } finally {
      this.mounting = false;
    }
  }

  closeDrawer(): void {
    this.userForm.reset();
    this.visible = false;
  }

  async submit() {
    for (const i in this.userForm.controls) {
      this.userForm.controls[i].markAsDirty();
      this.userForm.controls[i].updateValueAndValidity();
    }
    if (!this.userForm.valid) {
      return;
    }
    this.submitting = true;
    try {
      if (this.id) {
        await this.userService.update(this.id, this.userForm.value);
      } else {
        await this.userService.create(this.userForm.value);
      }
      this.closeDrawer();
      this.refresh.emit();
    } catch (e) {
      // ignore
    }
    this.submitting = false;
  }
}
