import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStroageService {

  constructor(
    private http: HttpClient,
    private recipeservices: RecipesService,
    private authservices: AuthService
  ) { }

  storeRecipe() {
    const token = this.authservices.getToken();
    return this.http.put('https://ng5-blog.firebaseio.com/recipes.json', this.recipeservices.getRecipes()
      , {
          // headers: new HttpHeaders().set('Auth', 'Rajat').append(),
          // params: new HttpParams().set('auth', token)
        }
      );

    /*
    some more way to http
    const req = new HttpRequest('PUT', 'https://ng5-blog.firebaseio.com/recipes.json',  this.recipeservices.getRecipes(), {
      reportProgress: true,
      params: new HttpParams().set('auth', token)
    });
    return this.HttpClient.request(req);
    */
  }

  getRecipe() {
    const token = this.authservices.getToken();
    // return this.http.get<Recipe[]>('https://ng5-blog.firebaseio.com/recipes.json?auth=' + token)
    return this.http.get<Recipe[]>('https://ng5-blog.firebaseio.com/recipes.json'
      // , {
      // observe: 'response / body',
      // responceType:'json/array/text/'
    // }
    )
      .subscribe(
        (responce) => {
          const res: Recipe[] = responce.json();
          this.recipeservices.setRecipe(res);
        }
      );
  }
}
