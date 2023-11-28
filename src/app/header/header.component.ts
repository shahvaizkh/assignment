import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }

  manageMod() {
    this.router.navigate(['/manage-moderator']);
  }

  manageUser() {
    this.router.navigate(['/manage-user']);
  }

  admin() {
    this.router.navigate(['/admin'])
  }
}
