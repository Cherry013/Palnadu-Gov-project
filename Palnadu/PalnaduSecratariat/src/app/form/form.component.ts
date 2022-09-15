import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  Name = "";
  Age = "";
  Father_Name = "";
  Mother_Name = "";
  Guardian = "";
  Gender = "";
  Details = {};
  form = {};
  constructor(private Router: Router, private UserService: UserServiceService) { }
  ngOnInit(): void {
  }
  Next() {
    this.Details = {
      Name: this.Name,
      Age: this.Age,
      Gender: this.Gender,
      Guardian: this.Guardian,
      Father_Name: this.Father_Name,
      Mother_Name: this.Mother_Name
    };
    this.form = this.UserService.SaveData(this.Details);
    console.log("form",this.form);
    this.Router.navigate(['castand-religion']);
  }
}
