import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { Book } from '././book-cards/book.model';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'any'})

export class BookService{
    constructor(private http: HttpClient) { }
    BookCards : any = [];
    errorMessage: any;

    onCreateBooks(bookData : Object){
        this.http.post('https://c-project-549f2-default-rtdb.europe-west1.firebasedatabase.app/books.json'
        , bookData).subscribe(data => {
          console.table(data)
        })
    }
    onDeleteBook(bookId : String){
      this.http.delete('https://c-project-549f2-default-rtdb.europe-west1.firebasedatabase.app/books.json',{'body':bookId})
        .subscribe(
          {next: data => {
            console.log('The path is valid and here are the data :', data);
          },
          error: error => { 
              this.errorMessage = error.message;
              console.error('The path is invalid!', error);
          }}
        );
    }

    onGetBooks(){
        this.http.get<{ [k: string] : Book}>('https://c-project-549f2-default-rtdb.europe-west1.firebasedatabase.app/books.json')
        .pipe(map(responseData=> {
          console.log("responseData", responseData)
          //had to google an issue https://effectivetypescript.com/2020/05/26/iterate-objects/#:~:text=If%20you%20want%20to%20iterate,and%20you%20want%20precise%20types.
          let k: keyof typeof responseData;
          for (k in responseData){
            if(responseData.hasOwnProperty(k)){
              this.BookCards.push({...responseData[k], id: k})
            }
          }
        }))
        .subscribe(
          {next: data => {
            console.error('The path is valid and here are the data :', data);
          },
          error: error => { 
              this.errorMessage = error.message;
              console.error('The path is invalid!', error);
          }}
        );
        return this.BookCards
    }
}