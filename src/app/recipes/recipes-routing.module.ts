import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../auth/auth-guard.service';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipesComponent} from './recipes.component';
import {RecipesDetailsComponent} from './recipes-details/recipes-details.component';

const recipesAppRouting: Routes = [
  { path: '', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService] },
      { path: ':id', component: RecipesDetailsComponent },
      { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService] }
    ]
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(recipesAppRouting)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuardService
  ]
})
export class RecipesRoutingModule {}
