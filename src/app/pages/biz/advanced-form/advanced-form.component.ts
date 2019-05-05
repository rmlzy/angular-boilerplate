import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-advanced-form',
  templateUrl: './advanced-form.component.html',
  styleUrls: ['./advanced-form.component.less']
})
export class AdvancedFormComponent implements OnInit {
  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      createDate: [null, [Validators.required]],
      payWay: [null, [Validators.required]],
      source: [null, [Validators.required]],
      company: [null, [Validators.required]],
      department: [null, [Validators.required]],
      salesman: [null, [Validators.required]],
      arrivalDate: [null, [Validators.required]],
      amount: [null, [Validators.required]],
      isNew: [null, [Validators.required]],
      isCoupon: [null, [Validators.required]],
    });
  }
}
