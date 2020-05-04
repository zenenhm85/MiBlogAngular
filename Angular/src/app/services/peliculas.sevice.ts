import { Injectable } from '@angular/core';
import { Pelicula} from '../models/pelicula';

@Injectable()
export class PeliculaService{

    public peliculas:Pelicula[];

    constructor(){
        this.peliculas = [
            new Pelicula("The social network",2012,"assets/images/network.jpg"),
            new Pelicula("El señor de los anillos",2015,"assets/images/señor.jpg"),
            new Pelicula("El Hobbit",2016,"assets/images/señor.jpg"),
            new Pelicula("Rescatando al soldado Ryan",2010,"assets/images/ryan.jpg")   
          ];
    }

    holaMundo(){
        return 'Hola mundo desde servicio peliculas de Angular!!!!';
    }
    getPeliculas(){
        return this.peliculas;
    }

}