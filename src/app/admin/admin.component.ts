import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  personData: any[] = [];

  constructor(private myService: MyServiceService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.myService.getData().subscribe((data) => {
      this.personData = data;
      console.log('Data from API:', data);
    });
  }
}
