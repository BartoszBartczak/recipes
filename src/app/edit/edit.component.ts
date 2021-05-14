import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from "../data.service";
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(
    private recipesService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  recipe: Recipe | null = null;
  id: string | null = null;

  getRecipe(recipeId: string): void {
    this.recipesService.getRecipe(recipeId).subscribe((recipe: Recipe) => {
      this.recipe = recipe;
    });
  }

  updateRecipe(recipe: Recipe): void {
    this.recipesService.updateRecipe(recipe).subscribe(() => {
      this.router.navigate([`/show/${this.id}`]);
    });
  }

  onSubmit(): void {
    if(this.recipe) this.updateRecipe(this.recipe);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id !== null) this.getRecipe(this.id);
  }
}