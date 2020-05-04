import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../models/article';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {Global} from '../../services/global';
import { from } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers:[ArticleService]
})
export class ArticleComponent implements OnInit {
  
  public article:Article;
  public url:any;

  constructor(private _articleService: ArticleService,private _route: ActivatedRoute,private _router: Router) {
    this.url = Global.url;
   }

  ngOnInit(): void {
    this._route.params.subscribe((params:Params)=>{     
      let id = params['id'];
      this._articleService.getArticle(id).subscribe(
        response => {
          if(response.article){
            this.article = response.article;
          }
          else{
            this._router.navigate(['/home']);
          }  
        },
        error => {
          this._router.navigate(['/home']);
        }  
      )     
    });
    
  }

}
