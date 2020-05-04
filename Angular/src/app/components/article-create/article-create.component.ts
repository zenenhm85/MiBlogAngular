import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';
import { from } from 'rxjs';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css'],
  providers:[ArticleService]
})
export class ArticleCreateComponent implements OnInit {
  public article:Article;
  public url: any;
  public status:string;

  constructor(private _articleService: ArticleService, private _route: ActivatedRoute, private _router: Router) { 
    this.article = new Article('','','',null,null);
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this._articleService.create(this.article).subscribe(
      response => {
        if(response.status == 'success'){
          this.status = 'success';
          this.article = response.article;
          this._router.navigate(['/blog']);           
        }
        else{
          this.status = 'error';   
        }  
      },
      error => {
        console.log(error);  
        this.status = 'error';        
      }  
      
    );  
  }

}
