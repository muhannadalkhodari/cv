import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component
({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  title = 'app';

  currentApp : string = 'home';

  constructor
  (
    private route: ActivatedRoute
  ) {}

  ngOnInit()
  {
    this.route.queryParamMap.subscribe(queryParams => 
    {
      this.currentApp = queryParams.get('app');
      console.log('Data: ', queryParams);
    });
  }
}
