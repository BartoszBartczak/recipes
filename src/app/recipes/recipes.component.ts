import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})

export class RecipesComponent implements OnInit {

  constructor(private recipesService: DataService) { }
  recipes: Recipe[] = [];
  currentRecipes: Recipe[] = [];
  currentPage = 0;
  lastPage = 0;
  reciperPerPage = 11;
  hasNext = false;
  hasPrev = false;

  goToPage(page: number): void {
    this.currentPage = page;
    this.hasNext = page < this.lastPage;
    this.hasPrev = page > 0;
    this.setCurrentRecipes();
  }

  setCurrentRecipes(): void {
    const first = this.currentPage * this.reciperPerPage;
    const last = first + this.reciperPerPage;
    this.currentRecipes = this.recipes.slice(first, last);
  }

  resetPagination(): void {
    this.currentPage = 0;
    this.lastPage = Math.floor(this.recipes.length / this.reciperPerPage);
    this.hasPrev = false;
    this.hasNext = this.lastPage > this.currentPage;
    this.setCurrentRecipes();
  }

  getRecipes(): void {
    this.recipesService.getRecipes().subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
      this.resetPagination();
    });
  }

  ngOnInit(): void {
    this.getRecipes();
  }
}