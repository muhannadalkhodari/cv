import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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
    // this.currentApp = this.route.snapshot.paramMap.get('app');
    // this.currentApp = this.route.paramMap.pipe
    // (
    //   switchMap(params => 
    //   {
    //     console.log(params.get('app'));
    //     return params.get('app');
    //   })
    // );

    this.route.queryParamMap.subscribe(queryParams => 
    {
      this.currentApp = queryParams.get('app');
      console.log('Data: ', queryParams);
    });
  }
}
