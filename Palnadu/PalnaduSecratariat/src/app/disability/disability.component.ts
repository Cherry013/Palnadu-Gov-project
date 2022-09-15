import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-disability',
  templateUrl: './disability.component.html',
  styleUrls: ['./disability.component.css']
})
export class DisabilityComponent implements OnInit {

  constructor(private Router: Router, private Userservice: UserServiceService) { }
  MentallyRetired = "";
  DeafandDumb = "";
  InheritedDisabilities = "";
  PovertyandMalnutration = "";
  Physicallyhandycapped = "";
  Details = {};
  FinalData = {};
  ngOnInit(): void {
  }
  Next() {
    this.Details = {
      MentallyRetired: this.MentallyRetired,
      DeafandDumb: this.DeafandDumb,
      InheritedDisabilities: this.InheritedDisabilities,
      PovertyandMalnutration: this.PovertyandMalnutration,
      Physicallyhandycapped: this.Physicallyhandycapped,
    }
    this.Router.navigate(['FinalSubmition']);
    this.FinalData = this.Userservice.SaveData(this.Details);
    console.log("This Final Data",this.FinalData);
  }
}
