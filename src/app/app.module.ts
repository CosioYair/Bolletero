import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavBarComponent } from './components/navBar/navBar.component';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './components/features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
