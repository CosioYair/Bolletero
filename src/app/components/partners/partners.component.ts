import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.sass']
})
export class PartnersComponent {
  public slideQuantities:any = {};
  public foodCostSaving:number = 0;
  public annualSaving:number = 0;

  constructor() {
    this.slideQuantities = {
      ingredientSpending: 36.211,
      timeEmployee: 5
    };
    this.foodCostSaving = parseFloat((this.slideQuantities.ingredientSpending * 0.3).toFixed(3));
    this.annualSaving = parseFloat((this.slideQuantities.timeEmployee  * 1337 + this.foodCostSaving).toFixed(3));
  }

  public onInputChange(event, key) {
    this.slideQuantities[key] = event.value;
    this.foodCostSaving = parseFloat((this.slideQuantities.ingredientSpending * 0.3).toFixed(3));
    this.annualSaving = parseFloat((this.slideQuantities.timeEmployee  * 1337 + this.foodCostSaving).toFixed(3));
  }
}
