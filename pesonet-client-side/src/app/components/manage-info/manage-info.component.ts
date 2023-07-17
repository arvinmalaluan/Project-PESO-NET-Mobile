import { Component, OnInit } from '@angular/core';
import { overview, details, contact } from './input';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-info',
  templateUrl: './manage-info.component.html',
  styleUrls: ['./manage-info.component.scss'],
})
export class ManageInfoComponent implements OnInit {
  newOver = overview;
  details = details;
  contacts = contact;
  isActive: boolean[] = [];

  manageData: any = FormGroup;

  showForm: string = 'overview';

  constructor(private fbuilder: FormBuilder) {
    for (let i = 0; i < 16; i++) {
      this.isActive.push(false);
    }

    console.log(this.isActive);
  }
  ngOnInit(): void {
    this.manageData = this.fbuilder.group({
      live: ['', [Validators.required]],
      place: ['', [Validators.required]],
      status: ['', [Validators.required]],
      number: ['', [Validators.required]],
      bio: ['', [Validators.required]],
      interest: ['', [Validators.required]],
      skills: ['', [Validators.required]],
      projects: ['', [Validators.required]],
      volunteer: ['', [Validators.required]],
      achievements: ['', [Validators.required]],
      email: ['', [Validators.required]],
      recovery: ['', [Validators.required]],
      github: ['', [Validators.required]],
      facebook: ['', [Validators.required]],
      linkedin: ['', [Validators.required]],
      instagram: ['', [Validators.required]],
    });
  }

  setShow(val: string) {
    this.showForm = val;
  }

  onFocus(id: number) {
    this.isActive[id] = true;
  }
  onBlur(idx: number, name: string) {
    const ifnull = this.manageData.get(name).value;

    if (ifnull != '') return;

    this.isActive[idx] = false;
  }
}
