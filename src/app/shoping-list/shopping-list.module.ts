import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ShopingListComponent} from './shoping-list.component';
import {ShopingEditComponent} from './shoping-edit/shoping-edit.component';
import {FilterPipe} from '../filter.pipe';

@NgModule({
  declarations: [
    ShopingListComponent,
    ShopingEditComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ShoppingListModule {}
