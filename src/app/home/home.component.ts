import { Component, OnInit } from '@angular/core';
import { DigitalClockComponent } from "../digitalClock/digitalClock.component";
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor
  (
    public data: DataService
  ) { }

  ngOnInit() 
  {
    
  }

}
