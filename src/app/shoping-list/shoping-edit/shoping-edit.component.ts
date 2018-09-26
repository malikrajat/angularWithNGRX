import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../recipes/shared/ingredient.model';
import {ShopingListService} from '../shoping-list.service';
import {Subscription} from 'rxjs/Subscription';
import {FormControl, FormGroup, NgControl, NgForm} from '@angular/forms';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit, OnDestroy {
  @ViewChild('controlNameInput') controlName: ElementRef;
  @ViewChild('controlAmountInput') controlAmount: ElementRef;
  @ViewChild('f') shopingList: NgForm;
  // @Output() addNewIngredent = new EventEmitter<Ingredient>()

  editSubscription: Subscription;
  editMode = false;
  editedItemIndex: number;

  constructor(private shopingService: ShopingListService) { }

  ngOnInit() {
    this.editSubscription =  this.shopingService.editStared.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        const editListContent = this.shopingService.getIndexedIngredient(index);
        this.shopingList.setValue({
          name: editListContent.name,
          amount: editListContent.amount
        });
      }
    );
  }

  addRecipe() {
    const name = this.controlName.nativeElement.value;
    const amount = this.controlAmount.nativeElement.value;
    const newIngedent = new Ingredient(name, amount);
    // this.addNewIngredent.emit(newIngedent);
    this.shopingService.addNewIngredient(newIngedent);
  }
  onAddItem(form: NgForm) {
    const name = form.value.name;
    const amount = form.value.amount;
    const newIngedent = new Ingredient(name, amount);
    if (this.editMode) {
      this.shopingService.updateIngredient(this.editedItemIndex, newIngedent);
    } else {
      this.shopingService.addNewIngredient(newIngedent);
    }
    this.shopingList.reset();
    this.editMode = false;
  }
  onClear() {
    this.shopingList.reset();
    this.editMode = false;
  }
  onDelete(index: number) {
    this.onClear();
    this.shopingService.deleteIngredient(index)
  }


  ngOnDestroy() {
    this.editSubscription.unsubscribe();
  }

}
