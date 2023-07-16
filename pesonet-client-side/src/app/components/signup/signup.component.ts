import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  setState = [false, false];
  passState: boolean = false;
  formData: any = FormGroup;
  show: boolean = false;
  isValid = [true, true];
  label: string = 'Show';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      identifier: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onFocus(id: number) {
    this.setState[id] = true;
  }
}
