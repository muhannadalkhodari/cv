import { ModernThemeComponent } from './modernTheme/modernTheme.component';
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
    { path: 'modernTheme', component: ModernThemeComponent },
    { path: '**', component: HomeComponent },
    { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }