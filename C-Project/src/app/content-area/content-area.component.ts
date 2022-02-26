import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../app.services';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.scss']
})

export class ContentAreaComponent implements OnInit {
  BookCards : any = [];
  

  constructor(private http: HttpClient, private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks(){
    this.BookCards = this.bookService.onGetBooks();
    console.log("BookCards", this.BookCards)
  }
}
