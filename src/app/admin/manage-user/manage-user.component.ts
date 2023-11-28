import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css'],
})
export class ManageUserComponent implements OnInit {
  constructor(private myService: MyServiceService) {}

  manageUser: any[] = [];

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.myService.getAll().subscribe((data) => {
      this.manageUser = data;
      console.log('Data from API:', data);
    });
  }

  approvedUser(item: any) {
    this.myService.updateStatus(item.id, 'Approved').subscribe((response) => {
      console.log('User Approved:', response);
      item.status = 'Approved';
    });
  }

  rejectUser(item: any) {
    this.myService.updateStatus(item.id, 'Rejected').subscribe((response) => {
      console.log('User Rejected:', response);
      item.status = 'Rejected';
  
      // After updating the status, delete the item from the JSON and the local array
      this.myService.deleteUsers(item.id).subscribe((res) => {
        console.log('User Deleted:', res);
        
        // Remove the rejected item from the manageUser array
        this.manageUser = this.manageUser.filter((user) => user.id !== item.id);
      });
    });
  }
  
}
