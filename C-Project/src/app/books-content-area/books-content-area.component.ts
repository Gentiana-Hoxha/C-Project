import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../app.services';

@Component({
  selector: 'app-books-content-area',
  templateUrl: './books-content-area.component.html',
  styleUrls: ['./books-content-area.component.scss']
})

export class BooksContentAreaComponent implements OnInit {
  BookCards : any = [];
  loading : boolean = true;

  constructor(private http: HttpClient, private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.onGetBooks().then((res : any)=>{
      let k: keyof typeof res;
        for (k in res){
          if(res.hasOwnProperty(k)){
            this.BookCards.push({...res[k], id: k})
          }
        }
      this.loading = false;
      console.log("test res", this.BookCards);
    });

  }
}