import {Component, OnInit} from '@angular/core';

import {Recipe} from '../recipe.model';
import {RecipesService} from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];
  constructor(private getRecipes: RecipesService) { }

  ngOnInit() {
    this.getRecipes.recipeupdate.subscribe(
      (recipe: Recipe[]) => {
        this.recipes = recipe;
      }
    )
    this.recipes = this.getRecipes.getRecipes();
  }

}
