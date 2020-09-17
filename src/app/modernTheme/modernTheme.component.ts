import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-modernTheme',
  templateUrl: './modernTheme.component.html',
  styleUrls: ['./modernTheme.component.css']
})
export class ModernThemeComponent implements OnInit, OnDestroy 
{
  currentActive: string = 'about';
  foldClass: string = '';

  constructor
  (
    public data: DataService
  ) { }

  ngOnInit() 
  {
    
  }

  ngOnDestroy()
  {
    
  }

  changeTab(tab: string)
  {
    this.foldClass = 'foldOut';
    setTimeout(() => 
    {
      this.currentActive = tab;
      this.foldClass = 'foldIn';
      setTimeout(() => 
      {
        this.foldClass = '';
      }, 500);
    }, 500);
  }

}
