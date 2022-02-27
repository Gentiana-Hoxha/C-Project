import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../app.services';

@Component({
  selector: 'app-book-card-form',
  templateUrl: './book-card-form.component.html',
  styleUrls: ['./book-card-form.component.scss']
})

@Injectable({providedIn: 'any'})


export class BookCardFormComponent implements OnInit {
  bookFormEditor!: FormGroup;


  bookGenres = ["Action", "Romance"];

  constructor(private http : HttpClient,  private bookService: BookService) { }

  ngOnInit(): void {

    this.bookFormEditor = new FormGroup({
      "mainDataE": new FormGroup({
        'bookAuthorE': new FormControl('', [Validators.required, Validators.maxLength(50)]),
        'bookTitleE': new FormControl('',Validators.required),
      }),
      "secondaryDataE": new FormGroup({
        'bookGenreE': new FormControl('Action'),
        'bookPublishedDateE': new FormControl(''),
        'bookStatusE': new FormControl(''),
        'bookSynopsisE': new FormControl('')
      })
    });

    // this.bookFormEditor.valueChanges.subscribe(value =>{
    //   console.log(value)
    // })
  }

  
  openEditor(id: string, status: string){
    this.bookService.onEditBook(id,status);
  }

  onSubmit(){
    // console.log(this.bookFormEditor)
  }
}
