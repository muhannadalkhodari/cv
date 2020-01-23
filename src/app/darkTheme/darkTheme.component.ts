import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-darkTheme',
  templateUrl: './darkTheme.component.html',
  styleUrls: ['./darkTheme.component.css']
})
export class DarkThemeComponent implements OnInit {

  constructor
  (
    public data: DataService
  ) { }

  ngOnInit() {
  }

  showMenu: boolean = false;
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) 
  {
    let element = document.querySelector('.w3-bar');
    let pageoffset = window.pageYOffset;
    let clientHeight = element.clientHeight;
    if (window.pageYOffset > element.clientHeight) 
    {
      element.classList.add("w3-bar");
      element.classList.add("w3-card");
      element.classList.add("w3-animate-top");
      element.classList.add("w3-white");
    } 
    else 
    {
      element.classList.remove("w3-card");
      element.classList.remove("w3-animate-top");
      element.classList.remove("w3-white");
    }
  }

  toggleFunction()
  {
    this.showMenu = !this.showMenu;
  }

}
