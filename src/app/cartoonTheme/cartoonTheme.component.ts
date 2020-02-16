import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from './../services/data.service';
import { timer } from 'rxjs';
import { ViewportScroller } from '@angular/common';

@Component
({
  selector: 'app-cartoonTheme',
  templateUrl: './cartoonTheme.component.html',
  styleUrls: ['./cartoonTheme.component.css']
})
export class CartoonThemeComponent implements OnInit 
{

  constructor
  (
    public data: DataService,
    private viewportScroller: ViewportScroller
  ) { }

  originalSlides: slide[] = 
  [
    { width: 1000 ,   markerMarginLeft: 180 ,    markerMarginTop : 500,   photoUrl: null, marker: "Welcome"   },
    { width: 1600 ,   markerMarginLeft: 200 ,    markerMarginTop : 575,   photoUrl: null, marker: "Skills"    },
    { width: 2000 ,   markerMarginLeft: 800 ,    markerMarginTop : 400,   photoUrl: null, marker: "Education" },
    { width: 2000 ,   markerMarginLeft: 1156,    markerMarginTop : 320,   photoUrl: null, marker: "Work"      },
    { width: 1400 ,   markerMarginLeft: 1270,    markerMarginTop : 428,   photoUrl: null, marker: "Contact"   }
  ];

  slides: slide[] = [];

  fullHeight = 1113;
  innerHeight = 0;
  wrapperWidth = 0;

  showModal = false;
  modalTop: number = -100;

  photosUrl: string = "url('assets/Muhannadonia_";

  selectedMarker: string = null;
  selectedExperience = null;

  ngOnInit() 
  {
    this.updateSizes();
    this.viewportScroller.scrollToAnchor('Work');
    this.showModalSmoothly('Welcome');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) 
  {
    this.updateSizes();
  }

  // @HostListener('window:wheel', ['$event']) 
  // windowScrolled(event) 
  // {
  //   let x = this.viewportScroller.scrollToAnchor('Work');
  //   console.log("scrolling " + x);
  // }

  updateSizes()
  {
    this.slides = [];
    this.wrapperWidth = 0;
    this.innerHeight = window.innerHeight;
    let heightRatio = (this.innerHeight / this.fullHeight);
    document.documentElement.style.setProperty('--heightRatio' , heightRatio.toString());
    this.originalSlides.forEach((originalSlide, i) => 
    {
      let s: slide = new slide;
      s.width = heightRatio * this.originalSlides[i].width;
      s.markerMarginLeft = heightRatio * this.originalSlides[i].markerMarginLeft; 
      s.markerMarginTop  = heightRatio * this.originalSlides[i].markerMarginTop - 64;
      s.photoUrl = this.photosUrl + (i+1) + ".png')";
      s.marker = originalSlide.marker;
      this.wrapperWidth += s.width; 
      this.slides.push(s);
    });
  }

  showModalSmoothly(marker: string)
  {
    this.showModal = true;
    this.selectedMarker = marker;

    // Since CCS transition did not work on 'top' value :(
    this.modalTop = -100;
    let t = timer(0, 10);
    t.subscribe(()=>
    {
      if(this.modalTop < 0)
      {
        this.modalTop = this.modalTop + 1;
      }
    })
  }

}

class slide
{
  width: number;
  markerMarginLeft: number;
  markerMarginTop : number;
  photoUrl: string;
  marker: string;  
}