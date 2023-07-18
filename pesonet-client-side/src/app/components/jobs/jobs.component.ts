import { Component, OnInit } from '@angular/core';
import { jobData } from '../../shared/jobData';

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

  constructor() {
    console.log(this.isActive);
  }

  ngOnInit(): void {
    jobData.forEach((element, index) => {
      this.isActive.push(false);
      this.showDetails.push(false);
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
}
