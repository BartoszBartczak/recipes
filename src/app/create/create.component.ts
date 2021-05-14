import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from "../data.service";
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  constructor(
    private recipesService: DataService,
    private router: Router
  ) { }

  recipe: Omit<Recipe, 'id'> = {
    pictureUrl: "",
    name: "",
    cousine: "",
    type: "",
    cookingTime: 0,
    ingredients: "",
    description: ""
  };

  ngOnInit(): void { }

  addRecipe(recipe: Omit<Recipe, 'id'>): void {
    this.recipesService.addRecipe(recipe).subscribe((recipe: Recipe) => {
      this.router.navigate([`/show/${recipe.id}`]);
    });
  }

  onSubmit(): void {
    this.addRecipe(this.recipe);
  }
}