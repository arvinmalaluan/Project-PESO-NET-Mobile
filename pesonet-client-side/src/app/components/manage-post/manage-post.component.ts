import { Component } from '@angular/core';
import { Months, btn } from './month';

@Component({
  selector: 'app-manage-post',
  templateUrl: './manage-post.component.html',
  styleUrls: ['./manage-post.component.scss'],
})
export class ManagePostComponent {
  months = Months;
  newBtn = btn;
}
