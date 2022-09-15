import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormComponent } from '../form/form.component';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-castand-religion',
  templateUrl: './castand-religion.component.html',
  styleUrls: ['./castand-religion.component.css']
})
export class CastandReligionComponent implements OnInit {

  constructor(private Userservice: UserServiceService,private Router:Router) { }
  Father_Work = "";
  Mother_Work = "";
  Cast = "";
  Religion = "";
  Details = {};
  Work = {};
  ngOnInit(): void {
  }
  Next() {
    this.Details = {
      Father_Work: this.Father_Work,
      Mother_Work: this.Mother_Work,
      Cast: this.Cast,
      Religion: this.Religion
    }
    this.Work = this.Userservice.SaveData(this.Details);
    console.log(this.Work)
    this.Router.navigate(['Work']);
  }
}
