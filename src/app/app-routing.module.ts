import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {ShopingListComponent} from './shoping-list/shoping-list.component';
import {HomeComponent} from './core/home/home.component';
import {RecipesModule} from './recipes/recipes.module';

const appRoutints: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
  { path: 'shoping-list', component: ShopingListComponent },

]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutints, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
