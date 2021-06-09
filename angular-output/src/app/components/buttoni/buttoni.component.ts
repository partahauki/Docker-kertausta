import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttoni',
  templateUrl: './buttoni.component.html',
  styleUrls: ['./buttoni.component.css']
})
export class ButtoniComponent implements OnInit {

  @Input() teksti: string = "button";
  @Input() color: string = "black";
  @Output() clickEvent = new EventEmitter();

  constructor() { }

  onClick() {
    this.clickEvent.emit();
  }

  ngOnInit(): void {
  }

}
