import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { NavBarComponent } from './components/navBar/navBar.component';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './components/features/features.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { StoriesComponent } from './components/stories/stories.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PartnersComponent } from './components/partners/partners.component';

import { NguCarouselModule } from '@ngu/carousel';
import { MatSliderModule } from '@angular/material/slider';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FeaturesComponent,
    SolutionsComponent,
    StoriesComponent,
    CarouselComponent,
    PartnersComponent,
    AboutComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NguCarouselModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
