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

  splashScreen: boolean = true;
  splashScreenContent: boolean = true;

  ngOnInit() 
  {
    if(localStorage.getItem('splashSeen') == 'true')
    {
      this.hideSplashScreen();
    }
  }

  hideSplashScreen()
  {
    this.splashScreen = false;
    this.splashScreenContent = false;
    localStorage.setItem('splashSeen', 'true');
  }

  showSplashScreen()
  {
    this.splashScreen = true;
    setTimeout(() => {
      this.splashScreenContent = true;
    }, 900);
    localStorage.setItem('splashSeen', 'false');
  }

}
