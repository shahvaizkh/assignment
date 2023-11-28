// import { Component, OnInit } from '@angular/core';
// import { MyServiceService } from '../my-service.service';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-admin',
//   templateUrl: './admin.component.html',
//   styleUrls: ['./admin.component.css'],
// })
// export class AdminComponent implements OnInit {
//   personData: any[] = [];
//   contactForm!: FormGroup;
//   userId!: number;

//   constructor(
//     private myService: MyServiceService,
//     private fb: FormBuilder,
//     private router: Router
//   ) {}

//   ngOnInit() {
//     this.initializeForm();
//     this.getData();
//   }

//   initializeForm(): void {
//     this.contactForm = this.fb.group({
//       name: ['', Validators.required],
//       password: ['', Validators.required],

//     });
//   }

//   getData() {
//     this.myService.getData().subscribe((data) => {
//       this.personData = data;
//       console.log('Data from API:', data);
//     });
//   }

//   updatePersons(id: any): void {
//     this.userId = id;
//     this.getUserById(id);
//     // routing
//     // this.router.navigate(['/user-edit', id]);
//   }

//   deletePersons(id: number): void {
//     this.myService.deletePersons(id).subscribe(() => {
//       alert('Sure! Want to Delete this user');
//       this.personData = this.personData.filter((person) => person.id !== id);
//     });
//   }

//   onSubmit(): void {
//     if (this.contactForm.valid) {
//       const formValues = this.contactForm.value;

//       if (this.userId > 0) {
//         this.myService
//           .updatePersons(this.userId, formValues)
//           .subscribe((res) => {
//             alert('Edit Updated : ' + ' ' + res.name);
//           });
//       } else {
//         this.myService.postAllPersons(formValues).subscribe((response: any) => {
//           alert('Post Created : ' + ' ' + response.name);
//         });
//       }
//       this.contactForm.reset();
//       this.userId = 0;
//     }
//   }

//   getUserById(userId: any) {
//     this.myService.getById(userId).subscribe((response: any) => {
//       this.contactForm.patchValue(response);
//     });
//   }
// }


import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  personData: any[] = [];
  contactForm!: FormGroup;
  userId!: number;

  constructor(
    private myService: MyServiceService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.initializeForm();
    this.getData();
  }

  initializeForm(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      role: ['user', Validators.required],  // Default role is set to 'user'
    });
  }

  getData() {
    this.myService.getData().subscribe((data) => {
      this.personData = data;
      console.log('Data from API:', data);
    });
  }

  updatePersons(id: any): void {
    this.userId = id;
    this.getUserById(id);
  }

  deletePersons(id: number): void {
    this.myService.deletePersons(id).subscribe(() => {
      alert('Sure! Want to Delete this user');
      this.personData = this.personData.filter((person) => person.id !== id);
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formValues = this.contactForm.value;

      if (this.userId > 0) {
        this.myService
          .updatePersons(this.userId, formValues)
          .subscribe((res) => {
            alert('Edit Updated : ' + ' ' + res.name);
          });
      } else {
        this.myService.postAllPersons(formValues).subscribe((response: any) => {
          alert('Post Created : ' + ' ' + response.name);
        });
      }
      this.contactForm.reset();
      this.userId = 0;
    }
  }

  getUserById(userId: any) {
    this.myService.getById(userId).subscribe((response: any) => {
      this.contactForm.patchValue(response);
    });
  }
}
