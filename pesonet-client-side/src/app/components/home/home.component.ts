import { Component, OnInit } from '@angular/core';
import { temporaryData } from './testFile';
import { feedBtns, topRightBtns } from 'src/app/shared/btns';
import { AuthServicesService } from 'src/app/services/auth.services.service';
import { jobData } from 'src/app/shared/jobData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tempData = temporaryData; // TODO: delete this after backend integration
  job;

  btnList = feedBtns;
  topRight = topRightBtns;
  showCreate = false;

  posts;

  // forms
  doesHave: boolean[] = [];

  constructor(private _userservice: AuthServicesService) {}
  ngOnInit() {
    this._userservice.getAllPosts().subscribe((response: any) => {
      this.posts = response.data;
      this.job = jobData;

      for (let i = 0; i < this.posts.length; i++) {
        const param = this.posts[i].imagename;

        if (param != '') {
          this.doesHave.push(true);
        } else {
          this.doesHave.push(false);
        }
      }
    });
  }

  showModal() {
    this.showCreate = !this.showCreate;
    console.log(this.job);
  }

  handleLike(paramOne: number, paramTwo: number) {}
}
