import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetvaluesService } from '../getvalues.service';

@Component({
  selector: 'app-dashboradd',
  templateUrl: './dashboradd.component.html',
  styleUrls: ['./dashboradd.component.css']
})
export class DashboraddComponent implements OnInit {

  public today: Date = new Date();
    public currentYear: number = this.today.getFullYear();
    public currentMonth: number = this.today.getMonth();
    public currentDay: number = this.today.getDate();
    public dateValue: Object = new Date(new Date().setDate(14));
    public minDate: Object = new Date(this.currentYear, this.currentMonth, 7);
    public maxDate: Object =  new Date(this.currentYear, this.currentMonth, 27);


  Right = "fa-solid fa-arrow-right";
  Today_reports = "0"
  Total_reports = "0"
  Username = ""
  Begging = "0";
  Hotels = "0";
  pvt = "0";
  rail = "0";
  brick = "0";
  Factories = "0";
  Construction = "0";
  other = "0";



  childvariable = {

  }

  constructor(private getvales: GetvaluesService) { }

  ngOnInit(): void {
  }
  Toggle() {
    if (this.Right == 'fa-solid fa-arrow-left text-danger') {
      this.Right = 'fa-solid fa-arrow-right';
      this.Begging = "0";
    }
    else {
      this.Right = 'fa-solid fa-arrow-left text-danger';
    }
  }
  work = ['Begging', 'shopPvt', 'RailwayStation', 'Hotels', 'Brick_Klins', 'Factories', 'Construction_Works', 'others']
  taking(eventData: { Mandal: string }) {
    this.childvariable = eventData.Mandal;
    console.log(this.childvariable);
    for (var i = 0; i < this.work.length; i++) {
      this.getvales.begging(eventData.Mandal.toLowerCase(), this.work[i]).subscribe((data: any) => {
        if (data) {
          if (i < 7) { 
            if (i < 6) {
              if (i < 5) {
                if (i < 4) {
                  if (i < 3) {
                    if (i < 2) {
                      if (i < 1) { this.Begging = data.begging; }
                      else { this.pvt = data.begging; }
                    }
                    else { this.rail = data.begging; }
                  }
                  else { this.Hotels = data.begging; }
                }
                else { this.brick = data.begging; }
              }
              else { this.Factories = data.begging; }
            }
            else { this.Construction = data.begging; }
          }
          else { this.other = data.begging; }
        }
        else {

          console.log(data.begging);
        }
      }, (err) => {
        console.log(err);
      });
    }
  }
}
