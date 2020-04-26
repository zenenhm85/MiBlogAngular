import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing,appRoutingProviders} from './app.routing';

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
    PeliculasComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
