import { Component, OnInit } from '@angular/core';
import {Pelicula} from '../../models/pelicula';
import { PeliculaService } from '../../services/peliculas.sevice';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers:[PeliculaService]
})
export class PeliculasComponent implements OnInit {

  public peliculas: Array<Pelicula>;

  constructor(
    private _peliculaService:PeliculaService
  ) { 
    this.peliculas = this._peliculaService.getPeliculas();

  }

  ngOnInit(): void {
      
  }

}
