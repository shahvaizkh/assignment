import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private router: Router) { }

  logout() {
    // Add logic to perform logout actions (e.g., clear tokens, navigate to login)
    // For simplicity, let's navigate to the login page
    this.router.navigate(['/login']);
  }
}
