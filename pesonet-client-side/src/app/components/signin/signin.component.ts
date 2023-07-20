import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthServicesService } from 'src/app/services/auth.services.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  setState = [false, false];
  formData: any = FormGroup;
  show: boolean = false;
  isValid = [true, true];
  label: string = 'Show';

  constructor(
    private formBuilder: FormBuilder,
    private _userservice: AuthServicesService,
    private _toast: ToastrService,
    private toast: NgToastService
  ) {}

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

    if (data.identifier == '') {
      this.isValid[0] = false;
    }

    if (data.password == '') {
      this.isValid[1] = false;
      return;
    }

    this._userservice.signin(data).subscribe(
      (response: any) => {
        if (response.success == 1) {
          this.toast.success({
            detail: 'Success message',
            summary: response.message,
            duration: 5000,
          });

          // this._toast.success('Successful, will now be redirected');
          // this._userservice.storeToken(response.token);
        } else {
          this._toast.error('Invalid username or password');
        }
      },
      (error) => {
        this._toast.error('Failed to sign in. Try again');
        console.log(error);
      }
    );
  }
}
