import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

import {RecipesService} from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode  = false;
  recipeForm: FormGroup;
  ingredientForm = new FormArray([]);
  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService,
    private nav: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }
  private initForm() {
    let name;
    let imagePath;
    let description;
    if (this.editMode) {
      const recipe = this.recipesService.getRecipe(this.id);
      name = recipe.name;
      imagePath = recipe.imagePath;
      description = recipe.description;
      if (recipe['ingredient']) {
        for (const ingredient of recipe.ingredient) {
          this.ingredientForm.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                 Validators.required,
                Validators.pattern(/^[0-9]$/)
              ])
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredients': this.ingredientForm
    });
  }
  onSubmit() {
    if (this.editMode) {
      this.recipesService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipesService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }
  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[0-9]$/)
        ])
      })
    );
  }
  onCancel() {
    this.nav.navigate(['../'], {relativeTo: this.route});
  }

  deleteItem(index: number) {
    // this.recipesService.deleteIngredient(this.id, index);
    // this.nav.navigate(['/recipes', this.id, 'edit']);
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}
