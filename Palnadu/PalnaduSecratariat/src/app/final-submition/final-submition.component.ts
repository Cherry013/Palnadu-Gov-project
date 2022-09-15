import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-final-submition',
  templateUrl: './final-submition.component.html',
  styleUrls: ['./final-submition.component.css']
})
export class FinalSubmitionComponent implements OnInit {
  The_Final_Submition: any;
  Name = "";
  Age = "";
  Father_Name = "";
  Guardian = "";
  Mother_Name = "";
  Gender = "";
  Father_Work = "";
  Mother_Work = "";
  Cast = "";
  Religion = "";
  MentallyRetired = "";
  DeafandDumb = "";
  InheritedDisabilities = "";
  PovertyandMalnutration = "";
  Physicallyhandycapped = "";
  Type_of_Work = "";
  Display !: boolean;
  StudiedClass = "";
  SchoolAddress = "";
  NearestSchool = "";
  AdmittedClass = "";
  child = "";
  LivingRequirement = "";
  Aadhar = "";
  Ration = "";
  Result = "";
  submittrue = false;
  Yes() {
    this.Display = true;
  }
  No() {
    this.Display = false;
  }
  Number_of_Details = 0;
  constructor(private Router: Router, private UserService: UserServiceService) { }
  ngOnInit(): void {
  }
  FinalSubmition() {
    this.submittrue = true;
    this.The_Final_Submition = this.UserService.SaveData({ PushStatus: "Ended" });
    this.Number_of_Details = Object.keys(this.The_Final_Submition).length;
    this.Name = this.The_Final_Submition.Name;
    this.Age = this.The_Final_Submition.Age;
    this.Father_Name = this.The_Final_Submition.Father_Name;
    this.Guardian = this.The_Final_Submition.Guardian;
    this.Mother_Name = this.The_Final_Submition.Mother_Name;
    this.Gender = this.The_Final_Submition.Gender;
    this.Father_Work = this.The_Final_Submition.Father_Work;
    this.Mother_Work = this.The_Final_Submition.Mother_Work;
    this.Cast = this.The_Final_Submition.Cast;
    this.Religion = this.The_Final_Submition.Religion;
    this.MentallyRetired = this.The_Final_Submition.MentallyRetired;
    this.DeafandDumb = this.The_Final_Submition.DeafandDumb;
    this.InheritedDisabilities = this.The_Final_Submition.InheritedDisabilities;
    this.PovertyandMalnutration = this.The_Final_Submition.PovertyandMalnutration;
    this.Physicallyhandycapped = this.The_Final_Submition.Physicallyhandycapped;
    this.Type_of_Work = this.The_Final_Submition.Type_of_Work;
    this.StudiedClass = this.The_Final_Submition.StudiedClass;
    this.SchoolAddress = this.The_Final_Submition.SchoolAddress;
    this.NearestSchool = this.The_Final_Submition.NearestSchool;
    this.AdmittedClass = this.The_Final_Submition.AdmittedClass;
    this.child = this.The_Final_Submition.child;
    this.LivingRequirement = this.The_Final_Submition.LivingRequirement;
    this.Aadhar = this.The_Final_Submition.Aadhar;
    this.Ration = this.The_Final_Submition.Ration;
    console.log(this.Number_of_Details)
  }
  submit() {
    this.The_Final_Submition = this.UserService.SaveData({ _: "End" });
    this.UserService.SendData(this.The_Final_Submition).subscribe((data)=>{
      console.log(data);
      this.Router.navigate(['Welcome'])
    }),(err:any)=>{
      this.Result=err;
    };
    
    
  }
}
