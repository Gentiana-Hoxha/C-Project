import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { Book } from '././book-cards/book.model';
import { BookModel } from "./book-card-form/book.model";

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from "@angular/router";
// import { BookCardForm } from './book-card-form/book-card-form.component';

@Injectable({providedIn: 'any'})

//https://stackoverflow.com/questions/33999813/delete-object-from-list-via-firebase-rest-api - some references that were needed for delete

export class BookService{
    constructor(private http: HttpClient, private router : Router, private route : ActivatedRoute) { }
    BookCards : any = [];
    errorMessage: any;
    url = "https://c-project-549f2-default-rtdb.europe-west1.firebasedatabase.app/books";

    onCreateBook(bookData : Object){
        this.http.post(this.url+'.json'
        , bookData).subscribe(
          {next: data => {
            this.router.navigate(['']);
          },
          error: error => { 
              this.errorMessage = error.message;
              console.error('The path is invalid!', error);
          }}
        );
    }

    onDeleteBook(bookId : String){
      this.http.delete(this.url+'/'+bookId+'.json')
        .subscribe(
          {next: data => {
            // this.router.navigate([''],{relativeTo:this.route});
            window.location.reload();//I leave it like that for now
          },
          error: error => { 
              this.errorMessage = error.message;
              console.error('The path is invalid!', error);
          }}
        );
    }

    onGetBooks(){
      return this.http.get<{ [k: string] : Book}>(this.url+'.json')
      .toPromise()
        // this.http.get<{ [k: string] : Book}>('https://c-project-549f2-default-rtdb.europe-west1.firebasedatabase.app/books.json')
        // .pipe(map(responseData=> {
        //   //had to google an issue https://effectivetypescript.com/2020/05/26/iterate-objects/#:~:text=If%20you%20want%20to%20iterate,and%20you%20want%20precise%20types.
        //   let k: keyof typeof responseData;
        //   for (k in responseData){
        //     if(responseData.hasOwnProperty(k)){
        //       this.BookCards.push({...responseData[k], id: k})
        //     }
        //   }
        // }))
        // .subscribe(
        //   {next: data => {
        //     console.log('The path is valid and here are the data :', data);
        //   },
        //   error: error => { 
        //       this.errorMessage = error.message;
        //       console.error('The path is invalid!', error);
        //   }}
        // );
        // return this.BookCards
    }


    onEditBook(bookData : any, bookID : string){
      this.http.put(this.url+'/'+bookID+'.json'
        , bookData).subscribe(
          {next: data => {
            this.router.navigate(['']);
          },
          error: error => { 
              this.errorMessage = error.message;
              console.error('The path is invalid!', error);
          }}
        );
    }

    onGetBook(bookId : String){
      return this.http.get<BookModel>(this.url+'/'+bookId+'.json')
      .toPromise();
    }
}