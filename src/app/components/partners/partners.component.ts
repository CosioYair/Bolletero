import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.sass']
})
export class PartnersComponent {
  public slideQuantities:any = {};

  constructor() {
    this.slideQuantities = {
      ingredientSpending: 36.211,
    };
  }

  public onInputChange(event, key) {
    this.slideQuantities[key] = event.value;
  }
}
