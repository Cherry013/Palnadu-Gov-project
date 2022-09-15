import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-requirement',
  templateUrl: './requirement.component.html',
  styleUrls: ['./requirement.component.css']
})
export class RequirementComponent implements OnInit {

  constructor(private Router :Router,private UserService:UserServiceService) { }
  LivingRequirement  = "";
  Aadhar = "";
  Ration = "";
  Details = {};
  Requirements = {};
  ngOnInit(): void {
  }
  Next(){
    this.Details = {
      Ration : this.Ration,
      Aadhar : this.Aadhar,
      LivingRequirement : this.LivingRequirement
    }
    this.Requirements = this.UserService.SaveData(this.Details);
    this.Router.navigate(['Disability']);
  }
}
