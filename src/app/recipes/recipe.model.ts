import {Ingredient} from './shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: String;
  public imagePath: String;
  public ingredient: Ingredient[];

  constructor(name: string, description: string, imagePath: string, ingredient: Ingredient[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredient = ingredient;
  }
}
