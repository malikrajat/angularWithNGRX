import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from './shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipesService {
  recipeupdate = new Subject<Recipe[]>()
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simple a test',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
      [
        new Ingredient('sugar', 6),
        new Ingredient('milk', 7)
      ]
    ),
    new Recipe(
      'A New User Test',
      '1234 This is simple a test',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
      [
        new Ingredient('sugar', 6),
        new Ingredient('milk', 7)
      ]
    )
  ];
  constructor() { }
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    // console.log(this.recipes[index]);
    return this.recipes[index];
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeupdate.next(this.recipes.slice());
  }
  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipeupdate.next(this.recipes.slice());
  }
  setRecipe(recipe: Recipe[]) {
    this.recipes = recipe;
    this.recipeupdate.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeupdate.next(this.recipes.slice());
  }
  deleteIngredient(recipeIndex: number, index: number) {
    this.recipes[recipeIndex].ingredient.splice(index, 1)
    // console.log(this.recipes[recipeIndex].ingredient[index]);
  }

}
