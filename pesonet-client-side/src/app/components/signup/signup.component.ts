import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServicesService } from 'src/app/services/auth.services.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  setState = [false, false, false, false];
  passState: boolean = false;
  formData: any = FormGroup;
  show: boolean = false;
  isValid = [true, true, true, true, true];

  label: string = 'Show';

  constructor(
    private formBuilder: FormBuilder,
    private _userservice: AuthServicesService
  ) {}

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]],
    });
  }

  onFocus(id: number) {
    this.setState[id] = true;
  }

  onBlur(id: number) {
    const { fname, lname, email, password } = this.formData.value;
    if (id == 0) {
      if (fname != '') {
        this.isValid[id] = true;
        return;
      }
    }

    if (id == 1) {
      if (lname != '') {
        this.isValid[id] = true;
        return;
      }
    } else if (id == 2) {
      if (email != '') {
        this.isValid[id] = true;
        return;
      }
    } else if (id == 3) {
      if (password != '') {
        this.isValid[id] = true;
        return;
      }
    }

    this.isValid[id] = false;
    this.setState[id] = false;
  }

  onClick(id: number) {
    this.isValid[id] = true;
  }

  toggleShow() {
    this.show = !this.show;
    this.label = !this.show ? 'Show' : 'Hide';
  }

  handleClick() {
    const data = this.formData.value;

    if (data.fname == '') {
      this.isValid[0] = false;
      return;
    }
    if (data.lname == '') {
      this.isValid[1] = false;
      return;
    }
    if (data.email == '') {
      this.isValid[2] = false;
      return;
    }
    if (data.password == '') {
      this.isValid[3] = false;
      return;
    }
    if (data.role == '') {
      this.isValid[4] = false;
      return;
    }

    this._userservice.signup(data).subscribe((response: any) => {
      const success = response.success;

      if (success == 1) {
        // TODO: redirect the user to login
        // TODO: save the token to local storage
      }
    });
  }
}
