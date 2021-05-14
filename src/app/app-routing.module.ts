import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShowComponent } from './show/show.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'recipes', component: RecipesComponent },
  { path: 'show/:id', component: ShowComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'create', component: CreateComponent },
  { path: "", redirectTo:"/recipes", pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
