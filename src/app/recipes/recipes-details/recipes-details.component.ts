import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {Recipe} from '../recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShopingListService} from '../../shoping-list/shoping-list.service';
import {RecipesService} from '../recipes.service';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  recipeList: Recipe;
  id: number;
  constructor(
    private shipingServices: ShopingListService,
    private route: ActivatedRoute,
    private recipeServices: RecipesService
  ) { }

  ngOnInit() {
    const id = this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.recipeList = this.recipeServices.getRecipe(+params['id']);
      }
    );
  }
  updateShopingList(ingredient: Ingredient[]) {
    this.shipingServices.addNewIngredients(ingredient);
  }

  onDelete(index: number) {
      this.recipeServices.deleteRecipe(index);
  }
}
