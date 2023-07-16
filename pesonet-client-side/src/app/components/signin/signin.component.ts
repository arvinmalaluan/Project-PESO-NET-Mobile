import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
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

  onBlur(id: number) {
    const { identifier, password } = this.formData.value;

    if (id == 0) {
      if (identifier != '') {
        this.isValid[id] = true;
        return;
      }
    } else {
      if (password != '') {
        this.isValid[id] = true;
        return;
      }
    }

    this.setState[id] = false;
    this.isValid[id] = false;
  }

  toggleShow() {
    this.show = !this.show;
    this.label = !this.show ? 'Show' : 'Hide';
  }

  handleSubmit() {
    const data = this.formData.value;

    console.log(data);
  }
}
