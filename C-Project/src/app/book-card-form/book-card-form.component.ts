import { HttpClient } from '@angular/common/http';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../app.services';

@Component({
  selector: 'app-book-card-form',
  templateUrl: './book-card-form.component.html',
  styleUrls: ['./book-card-form.component.scss']
})

@Injectable({providedIn: 'any'})


export class BookCardFormComponent implements OnInit {
  bookFormEditor2: FormGroup = new FormGroup({});
  href: any = "";
  book: any;
  loading : boolean = true;

  bookGenres = ["Action", "Romance"];

  constructor( private bookService: BookService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.bookService.onGetBook(this.route.snapshot.params['id']).then(res=>{
      this.book=res;
      // this.bookFormEditor = this.book;
      this.bookFormEditor2 = new FormGroup({
        "mainData": new FormGroup({
          'bookTitle': new FormControl(this.book.mainData.bookTitle,Validators.required),
          'bookAuthor': new FormControl(this.book.mainData.bookAuthor, [Validators.required, Validators.maxLength(50)])
        }),
        "secondaryData": new FormGroup({
          'bookGenre': new FormControl(this.book.secondaryData.bookGenre),
          'bookPublishedDate': new FormControl(this.book.secondaryData.bookPublishedDate),
          'bookStatus': new FormControl(this.book.secondaryData.bookStatus),
          'bookSynopsis': new FormControl(this.book.secondaryData.bookSynopsis),
          'bookImageURL': new FormControl(this.book.secondaryData.bookImageURL),

        }),
        "bookEditable": new FormControl(this.book.bookEditable),
        "bookDeletable": new FormControl(this.book.bookDeletable)
      });
      this.loading = false;
    });
    
  }

  onUpdate(){
    this.bookService.onEditBook(this.bookFormEditor2.value, this.route.snapshot.params['id'] )
  }
}
