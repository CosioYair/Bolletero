import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavBarComponent } from './components/navBar/navBar.component';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './components/features/features.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { StoriesComponent } from './components/stories/stories.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PartnersComponent } from './components/partners/partners.component';

import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FeaturesComponent,
    SolutionsComponent,
    StoriesComponent,
    CarouselComponent,
    PartnersComponent
  ],
  imports: [
    BrowserModule,
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
