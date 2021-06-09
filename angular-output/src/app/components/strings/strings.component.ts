import { Component, OnInit } from '@angular/core';
import { StringsService } from '../../services/strings.service'

@Component({
  selector: 'app-strings',
  templateUrl: './strings.component.html',
  styleUrls: ['./strings.component.css']
})
export class StringsComponent implements OnInit {

  strings: string[] = []

  constructor(private strSvc: StringsService) {}

  ngOnInit(): void {
    this.strSvc.getStrings().subscribe((data) => this.strings = data)
  }

}
