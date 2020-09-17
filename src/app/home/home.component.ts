import { Component, OnInit } from '@angular/core';
import { DigitalClockComponent } from "../digitalClock/digitalClock.component";
import { DataService, theme } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor
  (
    public data: DataService,
    private router: Router
  ) { }

  splashScreen: boolean = true;
  splashScreenContent: boolean = true;
  appToOpen: theme = null;
  appToOpenColor: string = '';

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

  openApp(app: theme)
  {
    this.appToOpen = app;

    document.documentElement.style.setProperty('--colorLeft' , app.colorLeft);
    document.documentElement.style.setProperty('--colorRight' , app.colorRight);

    setTimeout(() => {
      this.router.navigate(['/'+ app.link ]);
    }, 2000);

  }

}
