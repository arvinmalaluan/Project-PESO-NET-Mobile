import { Component } from '@angular/core';
import { temporaryData } from './testFile';
import { feedBtns, topRightBtns } from 'src/app/shared/btns';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  tempData = temporaryData; // TODO: delete this after backend integration
  btnList = feedBtns;
  topRight = topRightBtns;
}
