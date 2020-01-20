import { CartoonThemeComponent } from './cartoonTheme/cartoonTheme.component';
import { ColorsThemeComponent } from './colorsTheme/colorsTheme.component';
import { DarkThemeComponent } from './darkTheme/darkTheme.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { LightThemeComponent } from './lightTheme/lightTheme.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = 
[
    { path: 'lightTheme', component: LightThemeComponent },
    { path: 'darkTheme', component: DarkThemeComponent },
    { path: 'colorsTheme', component: ColorsThemeComponent },
    { path: 'cartoonsTheme', component: CartoonThemeComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', component: LightThemeComponent },
    { path: '', component: LightThemeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }