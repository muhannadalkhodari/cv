import { Component, OnInit, OnDestroy } from '@angular/core';
import * as moment from 'moment';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-digitalClock',
  templateUrl: './digitalClock.component.html',
  styleUrls: ['./digitalClock.component.css']
})
export class DigitalClockComponent implements OnInit, OnDestroy
{
  time: moment.Moment = moment();

  _refreshTimer = timer(1000, 1000);
  _refreshTimerSubscribtion : Subscription;

  constructor() { }

  ngOnInit() 
  {
    this._refreshTimerSubscribtion = this._refreshTimer.subscribe(val => 
    {
        this.time = moment();
    });
  }

  ngOnDestroy()
  {
      this._refreshTimerSubscribtion.unsubscribe();
  }

}
