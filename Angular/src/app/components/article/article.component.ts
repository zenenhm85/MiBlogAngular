import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';
import { from } from 'rxjs';
import swal from 'sweetalert';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public article: Article;
  public url: any;

  constructor(private _articleService: ArticleService, private _route: ActivatedRoute, private _router: Router) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      let id = params['id'];
      this._articleService.getArticle(id).subscribe(
        response => {
          if (response.article) {
            this.article = response.article;
          }
          else {
            this._router.navigate(['/home']);
          }
        },
        error => {
          this._router.navigate(['/home']);
        }
      )
    });

  }
  delete(id) {
    swal({
      title: "Estás seguro?",
      text: "Si elimina este artículo, no podrá recuperarlo!",
      icon: "warning",
      buttons: ["Cancelar", "OK"],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this._articleService.delete(id).subscribe(
            response => {
              this._router.navigate(['/blog']);
              swal("El artículo fue eliminado con éxito!", {
                icon: "success",
              });
            },
            error => {
              this._router.navigate(['/blog']);
            }
          );          
        } else {
          swal("Nada se ha borrado!");
        }
      });

  }

}
