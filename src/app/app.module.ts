import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { SlicePipe } from './slice.pipe';
import {RecipesModule} from './recipes/recipes.module';
import {SharedModule} from './share/shared.module';
import {ShoppingListModule} from './shoping-list/shopping-list.module';
import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    SlicePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    RecipesModule,
    SharedModule,
    ShoppingListModule,
    HttpClientModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
