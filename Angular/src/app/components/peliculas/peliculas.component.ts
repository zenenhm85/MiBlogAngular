import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public peliculas: Array<any>;

  constructor() { 
    this.peliculas = [
      {title: "The social network", image:"assets/images/network.jpg", year: 2012},
      {title: "El señor de los anillos", image:"assets/images/señor.jpg",year: 2015},
      {title: "El Hobbit", image:"assets/images/señor.jpg",year: 2016},
      {title: "Rescatando al soldado Ryan", image:"assets/images/ryan.jpg",year: 2010}
    ];

  }

  ngOnInit(): void {
  }

}
