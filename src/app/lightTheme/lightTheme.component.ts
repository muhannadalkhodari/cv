import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from './../services/data.service';


@Component({
  selector: 'app-lightTheme',
  templateUrl: './lightTheme.component.html',
  styleUrls: ['./lightTheme.component.css']
})
export class LightThemeComponent implements OnInit {

  constructor
  (
    public data: DataService
  ) { }

  showMenu: boolean = false;

  ngOnInit() {
  }

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
      element.classList.add("w3-light-grey");
    } 
    else 
    {
      element.classList.remove("w3-card");
      element.classList.remove("w3-animate-top");
      element.classList.remove("w3-light-grey");
    }
  }

  toggleFunction()
  {
    this.showMenu = !this.showMenu;
  }
  

}
