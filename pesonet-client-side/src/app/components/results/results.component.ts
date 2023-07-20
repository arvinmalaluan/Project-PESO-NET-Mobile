import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthServicesService } from 'src/app/services/auth.services.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  @Input() index: string;

  job: any[] = [];

  constructor(private _user: AuthServicesService) {}

  ngOnInit(): void {
    this._user.getAllPosts().subscribe((response: any) => {
      const datacount = response.data.length;
      const data = response.data;

      for (let i = 0; i < datacount; i++) {
        if (data[i].id == this.index) {
          this.job.push(data[i]);
        }
      }
    });
  }
}
