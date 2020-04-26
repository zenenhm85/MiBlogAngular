import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-probando',
  templateUrl: './probando.component.html',
  styleUrls: ['./probando.component.css']
})
export class ProbandoComponent implements OnInit {
  public nombre:string;
  public apellidos:string;

  constructor(private _route: ActivatedRoute,private _router: Router) {   

  }

  ngOnInit(): void {
    this._route.params.subscribe((params:Params)=>{     
      this.nombre = params.nombre;
      this.apellidos = params.apellidos;
    });
  }
  

}
