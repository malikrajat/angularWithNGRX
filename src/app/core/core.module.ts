import {NgModule} from '@angular/core';

import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {SharedModule} from '../share/shared.module';
import {AppRoutingModule} from '../app-routing.module';
import {ShopingListService} from '../shoping-list/shoping-list.service';
import {AuthGuardService} from '../auth/auth-guard.service';
import {RecipesService} from '../recipes/recipes.service';
import {AuthService} from '../auth/auth.service';
import {DataStroageService} from '../share/data-stroage.service';
import {AuthInterceptor} from '../share/auth.interceptor';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    RecipesService,
    ShopingListService,
    DataStroageService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]
})
export class CoreModule {}
