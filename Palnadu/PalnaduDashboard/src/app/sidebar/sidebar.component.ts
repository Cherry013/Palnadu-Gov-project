import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  @Input() clicked = "";
  @Output() Senddata = new EventEmitter<{Mandal:string}>();
  ngOnInit(): void {
  }
  changeClass(value: string) {
    this.Senddata.emit({Mandal:value});
  }
}
