import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private _route: ActivatedRoute,private _router: Router) { }

  ngOnInit(): void {
  }
  redireccionar(){   
    this._router.navigate(['/probando','Zenén', 'Hernández Martínez']);    
  }

}
