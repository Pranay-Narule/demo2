import { Component, OnInit } from '@angular/core';
import { recipe } from './recipe-list/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: recipe = new recipe ('','','');
  constructor() { 
   
  }

  ngOnInit(): void {
  }

}
