import { Component } from '@angular/core';
import { navData } from './navData';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  newNavData = navData;
}
