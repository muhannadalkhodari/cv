import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from './../services/data.service';
import { timer } from 'rxjs';

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
  modalTop: number = -100;

  photosUrl: string = "url('assets/Muhannadonia_";

  selectedMarker: string = null;
  selectedExperience = null;

  ngOnInit() 
  {
    this.updateSizes();
    this.showModalSmoothly('Welcome');
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