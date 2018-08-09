import { Component } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent {

  public carouselOne: NguCarousel;

  constructor() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true,
    };
  }
}
