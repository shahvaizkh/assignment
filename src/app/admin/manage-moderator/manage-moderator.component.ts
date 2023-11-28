import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-manage-moderator',
  templateUrl: './manage-moderator.component.html',
  styleUrls: ['./manage-moderator.component.css'],
})
export class ManageModeratorComponent implements OnInit {
  constructor(private myService: MyServiceService) {}

  manageMod: any[] = [];

  ngOnInit(): void {
    this.getMod();
  }

  getMod() {
    this.myService.getAll().subscribe((data) => {
      this.manageMod = data;
      console.log('Data from API:', data);
    });
  }

  approvedMod() {}

  rejectMod() {}

}