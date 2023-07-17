import { Component, OnInit } from '@angular/core';
import { personalDetails } from './resume';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-resume',
  templateUrl: './manage-resume.component.html',
  styleUrls: ['./manage-resume.component.scss'],
})
export class ManageResumeComponent implements OnInit {
  details = personalDetails;
  resumeData: any = FormGroup;
  isActive: boolean[] = [false, false, false, false];

  constructor(private fbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.resumeData = this.fbuilder.group({
      image: ['', [Validators.required]],
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      headline: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      postcode: ['', [Validators.required]],
      city: ['', [Validators.required]],
    });
  }

  onFocus(id: number) {
    this.isActive[id] = true;
  }
  onBlur(idx: number, name: string) {
    const ifnull = this.resumeData.get(name).value;
    console.log(ifnull);
    if (ifnull != '') return;

    this.isActive[idx] = false;
  }
}
