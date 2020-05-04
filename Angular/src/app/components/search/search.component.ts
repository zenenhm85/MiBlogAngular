import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';
import { from } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[ArticleService]
})
export class SearchComponent implements OnInit {

  public articles: Article[];
  public url: any;

  constructor(private _articleService: ArticleService, private _route: ActivatedRoute, private _router: Router) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe((params:Params)=>{     
      let search = params['search'];
      this._articleService.search(search).subscribe(
        response => {
          if(response.articles){
            this.articles = response.articles;
          }
          else{
            this._router.navigate(['/home']);
          }  
        },
        error => {
          this.articles = [];          
        }  
      );     
    });
    
  }

}
