import { Component, OnInit } from '@angular/core';
import { forgotInstruction } from './forgotData';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  data = forgotInstruction;

  setState = false;
  formData: any = FormGroup;
  show: boolean = false;
  isValid = true;
  label: string = 'Show';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      email: ['', [Validators.required]],
    });
  }

  onFocus() {
    this.setState = true;
  }

  onBlur() {
    const { email } = this.formData.value;

    if (email != '') {
      this.isValid = true;
      return;
    }

    this.isValid = false;
    this.setState = false;
  }
}
