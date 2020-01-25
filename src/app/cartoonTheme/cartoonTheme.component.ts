import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-cartoonTheme',
  templateUrl: './cartoonTheme.component.html',
  styleUrls: ['./cartoonTheme.component.css']
})
export class CartoonThemeComponent implements OnInit {

  constructor() 
  {
    
  }

  originalSlides: slide[] = 
  [
    { width: 500 ,   markerMarginLeft: 110,    markerMarginTop : 254,   photoUrl: null },
    { width: 800 ,   markerMarginLeft: 110,    markerMarginTop : 299,   photoUrl: null },
    { width: 1000,   markerMarginLeft: 420,    markerMarginTop : 214,   photoUrl: null },
    { width: 1000,   markerMarginLeft: 595,    markerMarginTop : 174,   photoUrl: null },
    { width: 700 ,   markerMarginLeft: 650,    markerMarginTop : 224,   photoUrl: null }
  ];

  slides: slide[] = 
  [
    { width: 0,   markerMarginLeft: 0,    markerMarginTop : 0,    photoUrl: null },
    { width: 0,   markerMarginLeft: 0,    markerMarginTop : 0,    photoUrl: null },
    { width: 0,   markerMarginLeft: 0,    markerMarginTop : 0,    photoUrl: null },
    { width: 0,   markerMarginLeft: 0,    markerMarginTop : 0,    photoUrl: null },
    { width: 0,   markerMarginLeft: 0,    markerMarginTop : 0,    photoUrl: null }
  ];

  fullHeight = 576;
  wrapperWidth = 0;

  showModal = false;

  photosUrl: string = "url('../../assets/Muhannadonia_";

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
    this.wrapperWidth = 0;
    let heightRatio = (window.innerHeight / 576);
    document.documentElement.style.setProperty('--heightRatio' , heightRatio.toString());
    this.slides.forEach((slide, i) => 
    {
      slide.width = heightRatio * this.originalSlides[i].width;
      slide.markerMarginLeft = heightRatio * this.originalSlides[i].markerMarginLeft; 
      slide.markerMarginTop  = heightRatio * this.originalSlides[i].markerMarginTop - 64;
      slide.photoUrl = this.photosUrl + (i+1) + ".png')";
      this.wrapperWidth += slide.width; 
    });
  }

}

class slide
{
  width: number;
  markerMarginLeft: number;
  markerMarginTop : number;
  photoUrl: string;
}