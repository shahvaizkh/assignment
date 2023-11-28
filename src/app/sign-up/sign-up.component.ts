import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  select: any;
  constructor(private myService: MyServiceService, private fb: FormBuilder) {}

  signupForm!: FormGroup;

  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['user', Validators.required],
      status: ['Pending'], // Default role is set to 'user'
    });
  }

  onSubmit() {
    const formValues = this.signupForm.value;

    this.myService.postAll(formValues).subscribe((response: any) => {
      alert('Your request is pending Admin will Approved or reject');
      console.log('Post Created : ' + ' ' + response.name);
    });
  }
}
