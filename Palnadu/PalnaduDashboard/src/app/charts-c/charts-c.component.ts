import { Component, OnInit } from '@angular/core';
import { bindCallback } from 'rxjs';
@Component({
  selector: 'app-charts-c',
  templateUrl: './charts-c.component.html',
  styleUrls: ['./charts-c.component.css']
})
export class ChartsCComponent implements OnInit {

 
  public piedata: object[] = [];
  public legendSettings: object | undefined;
  public tooltip : object | undefined;
  public datalabel: Object = { visible:true, position:'inside', name:'text' };
  public palette: String[] = [];
  ngOnInit(): void {
    this.piedata=[
      {x:'Begging',y:15},{x:'Hotel',y:25},
      {x:'shop/pvt-Sector',y:35},{x:'Railway Station',y:10},
      {x:'Brick klins',y:15},{x:'Factories',y:20},{x:'Constrction Workers',y:22},
      {x:'Others',y:25}
    ];
    this.legendSettings = { vsible:false };
    this.tooltip = { enable:true,
      format: '${series.name} ${point.x} : ${point.y}' ,
      fill: '#000',
      border:{
        color:'black'
      }
    };
    this.palette = []
  }
}