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
  

  constructor(private http: HttpClient, private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks(){
    this.BookCards = this.bookService.onGetBooks();
  }
}