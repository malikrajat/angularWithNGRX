import {Injectable} from '@angular/core';
import {Ingredient} from '../recipes/shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ShopingListService {
  ingredientAdded = new Subject<Ingredient[]>();
  editStared = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 5)
  ];
  constructor() { }
  getShopingList() {
    return this.ingredients.slice();
  }
  addNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.next(this.ingredients.slice());
  }
  addNewIngredients(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient);
    this.ingredientAdded.next(this.ingredients.slice());
  }
  getIndexedIngredient(index: number) {
    return this.ingredients[index];
  }
  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientAdded.next(this.ingredients.slice());
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientAdded.next(this.ingredients.slice());
  }

}
