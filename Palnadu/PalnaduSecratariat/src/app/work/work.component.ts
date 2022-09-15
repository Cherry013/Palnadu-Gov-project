import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(private UserService: UserServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  Details = {

  };
  Type_of_Work = "";
  Display !:boolean;
  StudiedClass ='';
  SchoolAddress = '';
  NearestSchool = '';
  AdmittedClass = '';
  child = "";
  
  Yes(){
    this.Display =true;
  }
  No(){
    this.Display =false;
  }
  Next(){
    if(this.Display){
      this.Details = {
        Type_of_Work: this.Type_of_Work,
        StudiedClass: this.StudiedClass,
        SchoolAddress: this.SchoolAddress,
        NearestSchool: this.NearestSchool,
        AdmittedClass: this.AdmittedClass,
      }
      this.UserService.SaveData(this.Details);
      this.router.navigate(['Requirement']);
    }
    else{
      this.Details = {
        Type_of_Work: this.Type_of_Work,
        StudiedClass: this.child,
        SchoolAddress: this.SchoolAddress,
        NearestSchool: this.NearestSchool,
        AdmittedClass: this.AdmittedClass,
      }
      this.UserService.SaveData(this.Details);
      this.router.navigate(['Requirement']);
    }
  }
}
