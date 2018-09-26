import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipesListComponent} from './recipes-list/recipes-list.component';
import {RecipesComponent} from './recipes.component';
import {RecipesDetailsComponent} from './recipes-details/recipes-details.component';
import {RecipesItemComponent} from './recipes-list/recipes-item/recipes-item.component';
import {RecipesRoutingModule} from './recipes-routing.module';
import {SharedModule} from '../share/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ],
  declarations: [
    RecipeStartComponent,
    RecipeEditComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailsComponent,
    RecipesItemComponent,
  ]
})
export class RecipesModule {}
