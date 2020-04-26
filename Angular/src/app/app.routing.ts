import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

//Importando componentes para páginas exclusivas
import {HomeComponent} from './components/home/home.component';
import {BlogComponent} from './components/blog/blog.component';
import {FormularioComponent} from './components/formulario/formulario.component';
import {ProbandoComponent} from './components/probando/probando.component';
import { ErrorComponent } from './components/error/error.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';

//Array de Rutas

const appRoutes:Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'blog',component:BlogComponent},
    {path:'formulario',component:FormularioComponent},
    {path:'probando',component:ProbandoComponent},
    {path:'probando/:nombre/:apellidos',component:ProbandoComponent},
    {path:'peliculas',component:PeliculasComponent},
    {path:'**',component:ErrorComponent}
];

//Exportar el módulo de rutas
export const appRoutingProviders:any[] = [];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
