import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-colorsTheme',
  templateUrl: './colorsTheme.component.html',
  styleUrls: ['./colorsTheme.component.css']
})
export class ColorsThemeComponent implements OnInit {

  constructor
  (
    public data: DataService
  ) { }

  showMenu: boolean = false;

  colors: string[] = 
  [
    "red",
    "pink",
    "purple",
    "indigo",
    "blue",
    "teal",
    "green",
    "yellow",
    "orange",
    "brown"
  ];

  selectedColor: string = 'red';

  ngOnInit() {
  }

}
