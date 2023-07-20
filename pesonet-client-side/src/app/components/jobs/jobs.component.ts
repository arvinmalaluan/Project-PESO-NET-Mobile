import { Component, OnInit } from '@angular/core';
import { jobData } from '../../shared/jobData';
import { AuthServicesService } from 'src/app/services/auth.services.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  showDetails: boolean[] = [];
  jobData = jobData;
  resLength = jobData.length;
  isActive: boolean[] = [];
  id: number;
  isTriggered: boolean = false;

  defaultValue = [];
  searchval: any = FormGroup;

  constructor(private _user: AuthServicesService, private _fb: FormBuilder) {}

  ngOnInit(): void {
    this._user.getAllPosts().subscribe((response: any) => {
      this.defaultValue = response.data;

      this.defaultValue.forEach((elements, index) => {
        this.isActive.push(false);
        this.showDetails.push(false);
      });
    });

    this.searchval = this._fb.group({
      search: [''],
      location: [''],
    });
  }

  toggleShow(id: number) {
    for (let i = 0; i < this.isActive.length; i++) {
      if (i != id) {
        this.isActive[i] = false;
        this.showDetails[i] = false;
      }
    }
    this.showDetails[id] = !this.showDetails[id];
    this.id = id;

    this.isActive[id] = !this.isActive[id];
  }

  handleSearch() {
    this.isTriggered = !this.isTriggered;
  }

  close(unique: number) {
    this.showDetails[unique] = !this.showDetails[unique];
    this.isActive[unique] = !this.isActive[unique];
  }

  handleResult() {
    const data = this.searchval.value;
    console.log(data);
    this._user.search(data).subscribe((response: any) => {
      this.defaultValue = response.data;
    });
  }
}
