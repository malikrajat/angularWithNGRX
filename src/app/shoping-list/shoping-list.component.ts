import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {Ingredient} from '../recipes/shared/ingredient.model';
import {ShopingListService} from './shoping-list.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit, OnDestroy {

  filerValue = '';
  ingredients: Ingredient[];
  private subscription: Subscription;
  constructor(private shopingServices: ShopingListService) { }

  ngOnInit() {
    this.ingredients = this.shopingServices.getShopingList();
    this.subscription = this.shopingServices.ingredientAdded.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  pushNewIngredent(ingredent: Ingredient) {
    this.ingredients.push(ingredent);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onEditItem(index: number) {
    this.shopingServices.editStared.next(index);
  }

}
