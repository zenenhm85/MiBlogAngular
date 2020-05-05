import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import {Observable, from} from 'rxjs';
import { Article } from '../models/article';
import { Global } from './global'



@Injectable()
export class ArticleService{

   public url: string;

    constructor(
        private _http:HttpClient
    ){
        this.url = Global.url;
        
    }
    getArticles(last:any = null):Observable<any>{
        var articles = 'articles/'+last;

        if(last == null){
            articles = 'articles';
        }

        return this._http.get(this.url+articles);
    }
    getArticle(id):Observable<any>{
        var articles = 'article/'+id;        

        return this._http.get(this.url+articles);
    }
    search(searchString):Observable<any>{
        return this._http.get(this.url+'search/'+searchString);
    }
    create(article):Observable<any>{
        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        
        return this._http.post(this.url+'save',params,{headers:headers});
    } 
    update(id,article):Observable<any>{
        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        
        return this._http.put(this.url+'article/'+id,params,{headers:headers});
    } 
    delete(id):Observable<any>{
        
        let headers = new HttpHeaders().set('Content-Type','application/json');
        
        return this._http.delete(this.url+'article/'+id,{headers:headers});
    } 


}