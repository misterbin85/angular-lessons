import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppping-list',
  templateUrl: './shoppping-list.component.html',
  styleUrls: ['./shoppping-list.component.css']
})
export class ShopppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10)
  ];

  defValue = 'NiceTry';
  constructor() { }

  ngOnInit() {
  }

}
