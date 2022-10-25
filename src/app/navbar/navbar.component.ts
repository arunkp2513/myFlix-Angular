import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user: any = '';

  /** @constructor */
  constructor(public router: Router) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
  }

  /**
   * This function is used to log the user out
   * @function logoutUser
   */
  logoutUser(): void {
    localStorage.clear();
    alert('You have successfully logged out');
    this.router.navigate(['']);
  }

  loadProfile(): void {
    this.router.navigate(['profile']);
  }

  loadMovies(): void {
    this.router.navigate(['movies']);
  }
}
