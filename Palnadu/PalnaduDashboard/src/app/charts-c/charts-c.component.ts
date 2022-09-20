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
  ngOnInit(): void {
    this.piedata=[
      {x:'Begging',y:'{{Begging}}'},{x:'Hotel',y:'{{Hotels}}'},
      {x:'shop/pvt-Sector',y:'{{pvt}}'},{x:'Railway Station',y:'{{rail}}'},
      {x:'Brick klins',y:'{{brick}}'},{x:'Factories',y:'{{Factories}}'},{x:'Constrction Workers',y:'{{Construction}}'},
      {x:'Others',y:'{{other}}'}
    ];
    this.legendSettings = { vsible:true };
    this.tooltip = { enable:true,
      format: '${series.name} ${point.x} : ${point.y}' ,
      fill: '#000',
      border:{
        color:'black'
      }
    }
  }
}