import { Component, OnInit } from '@angular/core';
import { feedBtns, topRightBtns } from 'src/app/shared/btns';
import { AuthServicesService } from 'src/app/services/auth.services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  btnList = feedBtns;
  topRight = topRightBtns;
  showCreate = false;

  posts;
  interactions;
  like: boolean[] = [];
  save: boolean[] = [];
  apply: boolean[] = [];

  // forms
  doesHave: boolean[] = [];

  constructor(private _userservice: AuthServicesService) {}
  ngOnInit() {
    this._userservice.getAllPosts().subscribe((response: any) => {
      this.posts = response.data;

      for (let i = 0; i < this.posts.length; i++) {
        const param = this.posts[i].imagename;

        if (param != '') {
          this.doesHave.push(true);
        } else {
          this.doesHave.push(false);
        }
      }
    });

    this._userservice.getAllInteractions().subscribe((response: any) => {
      this.interactions = response.data;

      console.log(this.interactions);

      const postsLength = this.posts.length;
      const interLength = this.interactions.length;

      for (let i = 0; i < interLength; i++) {
        for (let j = 0; j < postsLength; j++) {
          if (this.interactions[i].id == this.posts[j].id) {
            // For Save
            if (
              this.interactions[i].saved_id != null &&
              this.interactions[i].saved_isClicked != false
            ) {
              this.save.push(true);
            } else {
              this.save.push(false);
            }

            // For Like
            if (
              this.interactions[i].liked_id != null &&
              this.interactions[i].liked_isClicked
            ) {
              this.like.push(true);
            } else {
              this.like.push(false);
            }

            // For Apply
            if (
              this.interactions[i].applied_id != null &&
              this.interactions[i].applied_isClicked
            ) {
              this.apply.push(true);
            } else {
              this.apply.push(false);
            }
          }
        }
      }
    });
  }

  showModal() {
    this.showCreate = !this.showCreate;
  }

  handleSave(post_id: number, btn_i: number) {
    if (this.save[btn_i] && !!this.interactions[btn_i].saved_id) {
      // Cancel like
      // data = desiredtable, checker

      const data = {
        checker: this.interactions[btn_i].saved_id,
        desired_table: 'saved_posts',
        boolean: this.save[btn_i] ? 'true' : 'false',
      };

      this._userservice.cancelIneraction(data).subscribe((response: any) => {
        console.log(response);
      });

      console.log(data);
    } else {
      // Give like
      // const myId = this._userservice.getMyId();
      // const data = { myId, post_id, desired_table: 'saved_posts' };
      // this.funcQuery(data);
    }

    this.save[btn_i] = !this.save[btn_i];
  }

  handleLike(post_id: number) {
    const myId = this._userservice.getMyId();
    const data = { myId, post_id, desired_table: 'liked_posts' };

    this.funcQuery(data);
  }

  handleApply(post_id: number) {
    const myId = this._userservice.getMyId();
    const data = { myId, post_id, desired_table: 'applied_posts' };

    this.funcQuery(data);
  }

  funcQuery(data) {
    this._userservice.save(data).subscribe((response: any) => {
      if (response.success == 1) {
        console.log('success', response);
      } else {
        console.log('error', response);
      }
    });
  }
}
