import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from './../services/data.service';

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
    public data: DataService
  ) { }

  originalSlides: slide[] = 
  [
    { width: 500 ,   markerMarginLeft: 110,    markerMarginTop : 254,   photoUrl: null, marker: "Welcome"   },
    { width: 800 ,   markerMarginLeft: 110,    markerMarginTop : 299,   photoUrl: null, marker: "Skills"    },
    { width: 1000,   markerMarginLeft: 420,    markerMarginTop : 214,   photoUrl: null, marker: "Education" },
    { width: 1000,   markerMarginLeft: 595,    markerMarginTop : 174,   photoUrl: null, marker: "Work"      },
    { width: 700 ,   markerMarginLeft: 650,    markerMarginTop : 224,   photoUrl: null, marker: "Contact"   }
  ];

  slides: slide[] = [];

  fullHeight = 576;
  wrapperWidth = 0;

  showModal = false;

  photosUrl: string = "url('/assets/Muhannadonia_";

  selectedMarker: string = null;

  ngOnInit() 
  {
    this.updateSizes();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) 
  {
    this.updateSizes();
  }

  updateSizes()
  {
    this.slides = [];
    this.wrapperWidth = 0;
    let heightRatio = (window.innerHeight / 576);
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

}

class slide
{
  width: number;
  markerMarginLeft: number;
  markerMarginTop : number;
  photoUrl: string;
  marker: string;  
}