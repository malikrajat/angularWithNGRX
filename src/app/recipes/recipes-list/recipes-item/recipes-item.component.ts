import {Component, Input, OnInit} from '@angular/core';

import {Recipe} from '../../recipe.model';
import {RecipesService} from '../../recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() items: Recipe;
  @Input() index: number;

  constructor(private recipeServices: RecipesService) { }

  ngOnInit() {
  }
}
