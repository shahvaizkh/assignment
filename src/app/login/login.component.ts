import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const username = this.loginForm.value.username.toLowerCase(); // Convert to lowercase for case-insensitive check
    const password = this.loginForm.value.password;

    if (username === 'admin1' && password === 'test123') {
      this.router.navigate(['/admin']);
    } else if (username === 'moderator1' && password === 'test123') {
      this.router.navigate(['/moderator']);
    } else if (username === 'user1' && password === 'test123') {
      this.router.navigate(['/users']);
    } else {
      // Handle invalid credentials (e.g., display an error message)
      console.log("Invalid credentials");
    }
  }
}
