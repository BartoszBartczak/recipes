import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShowComponent } from './show/show.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TitlePipe } from './title.pipe';
import { TimePipe } from './time.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RecipesComponent,
    ShowComponent,
    EditComponent,
    CreateComponent,
    PageNotFoundComponent,
    TitlePipe,
    TimePipe,
    HighlightDirective,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
