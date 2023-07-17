import { Component, Input, OnInit } from '@angular/core';
import { jobData } from '../../shared/jobData';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  @Input() index: string;
  jobData = jobData;

  id: number;
  jobTitle: string;
  jobDescription: string;
  requiredSkills: string[];
  requiredEducation: string;
  requiredExperience: string;
  location: string;
  salaryRange: string;
  jobType: string;

  constructor() {
    console.log(this.index);
  }

  ngOnInit(): void {
    // const {
    //   id,
    //   jobTitle,
    //   jobDescription,
    //   requiredSkills,
    //   requiredEducation,
    //   requiredExperience,
    //   location,
    //   salaryRange,
    //   jobType,
    // } = this.jobData;
    // this.id = id;
    // this.jobTitle = jobTitle;
    // this.jobDescription = jobDescription;
    // this.requiredSkills = requiredSkills;
    // this.requiredEducation = requiredEducation;
    // this.requiredExperience = requiredExperience;
    // this.location = location;
    // this.salaryRange = salaryRange;
    // this.jobType = jobType;
  }
}
