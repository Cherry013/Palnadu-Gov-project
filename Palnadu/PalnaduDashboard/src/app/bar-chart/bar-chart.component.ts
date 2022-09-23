import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public primaryXAxis: Object = { valuetype:'Category' };
  public chartData: Object[] = [];

  ngOnInit(): void {

  }

}
