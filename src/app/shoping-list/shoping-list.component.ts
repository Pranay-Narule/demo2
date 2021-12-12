import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/Ingredent.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingredients: ingredient[] = [
    new ingredient('Apple', 5),
    new ingredient('Tomatoes', 10)];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: ingredient){
    this.ingredients.push(ingredient);
  }
}
