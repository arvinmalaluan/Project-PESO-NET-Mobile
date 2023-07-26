import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthServicesService } from 'src/app/services/auth.services.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

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
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private _userservice: AuthServicesService,
    private _toast: ToastrService,
    private toast: NgToastService,
    private router: Router,
    private ngxService: NgxUiLoaderService
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
    this.ngxService.start();
    const data = this.formData.value;

    if (data.identifier == '') {
      this.isValid[0] = false;
    }

    if (data.password == '') {
      this.isValid[1] = false;
    }

    this._userservice.signin(data).subscribe(
      (response: any) => {
        this.ngxService.stop();

        if (response.success == 1) {
          this._toast.success('Successful, will now be redirected');
          localStorage.setItem('token', response.token);

          this.router.navigate(['home']);
        } else {
          this._toast.error('Invalid username or password');
        }
      },
      (error) => {
        this.ngxService.stop();
        this._toast.error('Failed to sign in. Try again');
        console.log(error);
      }
    );
  }
}
