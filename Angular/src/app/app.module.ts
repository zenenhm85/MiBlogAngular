import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing,appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
import {FormsModule} from '@angular/forms';
import { AngularFileUploaderModule } from "angular-file-uploader"


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ProbandoComponent } from './components/probando/probando.component';
import { from } from 'rxjs';
import { ErrorComponent } from './components/error/error.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleCreateComponent } from './components/article-create/article-create.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    ProbandoComponent,
    ErrorComponent,
    PeliculasComponent,
    ArticlesComponent,
    ArticleComponent,
    SearchComponent,
    ArticleCreateComponent,
    ArticleEditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    MomentModule,
    FormsModule,
    AngularFileUploaderModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
