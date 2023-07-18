import { Component } from '@angular/core';
import { navData } from './navData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  newNavData = navData;
  showSideBar = false;

  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([`${path}`]);
  }

  changeState() {
    this.showSideBar = !this.showSideBar;
  }
}
