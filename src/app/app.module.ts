import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LightThemeComponent } from './lightTheme/lightTheme.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './routing.module';
import { DarkThemeComponent } from './darkTheme/darkTheme.component';
import { ColorsThemeComponent } from './colorsTheme/colorsTheme.component';
import { CartoonThemeComponent } from './cartoonTheme/cartoonTheme.component';

@NgModule({
   declarations: [
      AppComponent,
      LightThemeComponent,
      HomeComponent,
      DarkThemeComponent,
      ColorsThemeComponent,
      CartoonThemeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
