import { Component, OnInit, HostListener, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from './../services/data.service';


@Component
({
  selector: 'app-lightTheme',
  templateUrl: './lightTheme.component.html',
  styleUrls: ['./lightTheme.component.css']
})
export class LightThemeComponent implements OnInit, AfterViewInit  
{

  // @ViewChild('home') homeElement: ElementRef;
  
  @ViewChild('about') aboutElement: ElementRef;
  @ViewChild('work') workElement: ElementRef;
  @ViewChild('education') educationElement: ElementRef;
  @ViewChild('contact') contactElement: ElementRef;

  public currentActive = 0;
  public homeOffset: Number = null;
  public aboutOffset: Number = null;
  public workOffset: Number = null;
  public educationOffset: Number = null;
  public contactOffset: Number = null;

  constructor
  (
    public data: DataService
  ) { }

  showMenu: boolean = false;

  ngAfterViewInit()
  {
    // this.homeOffset = this.homeElement.nativeElement.offsetTop;

    this.aboutOffset = this.aboutElement.nativeElement.offsetTop;
    this.workOffset = this.workElement.nativeElement.offsetTop;
    this.educationOffset = this.educationElement.nativeElement.offsetTop;
    this.contactOffset = this.contactElement.nativeElement.offsetTop;
  }

  ngOnInit() 
  {

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

    // if (window.pageYOffset >= this.homeOffset && window.pageYOffset < this.aboutOffset) {
    //   this.currentActive = 1;
    // } else 

    if (window.pageYOffset >= this.aboutOffset && window.pageYOffset < this.workOffset) {
      this.currentActive = 2;
    } else if (window.pageYOffset >= this.workOffset && window.pageYOffset < this.educationOffset) {
      this.currentActive = 3;
    } else if (window.pageYOffset >= this.educationOffset && window.pageYOffset < this.contactOffset) {
      this.currentActive = 4;
    } else if (window.pageYOffset >= this.contactOffset) {
      this.currentActive = 5;
    } else {
      this.currentActive = 0;
    }
  }

  toggleFunction()
  {
    this.showMenu = !this.showMenu;
  }
  

}
