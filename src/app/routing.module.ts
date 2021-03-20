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
  //{ path: 'app/:app', component: HomeComponent },
  // { path: 'app/lightTheme', component: LightThemeComponent },
  // { path: 'app/darkTheme', component: DarkThemeComponent },
  // { path: 'app/colorsTheme', component: ColorsThemeComponent },
  // { path: 'app/cartoonsTheme', component: CartoonThemeComponent },
  // { path: 'app/modernTheme', component: ModernThemeComponent },
  { path: '**', component: HomeComponent }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }