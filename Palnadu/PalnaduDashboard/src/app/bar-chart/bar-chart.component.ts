import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {



  public primaryXAxis: Object = { valuetype:'Category' };
  public chartData: Object[] = [];

  ngOnInit(): void {
    this.chartData = [
      { Work:"Begging",Reports:25 },
      { Work:"Hotels",Reports:15 },
      { Work:"Shop_PVT",Reports:17 }
    ];
  }

}
