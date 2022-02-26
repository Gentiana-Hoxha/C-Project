import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-card-form',
  templateUrl: './book-card-form.component.html',
  styleUrls: ['./book-card-form.component.scss']
})


export class BookCardFormComponent implements OnInit {
  bookFormEditor!: FormGroup;

  bookGenres = ["Action", "Romance"];

  constructor(private http : HttpClient) { }

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

  


  onSubmit(){
    // console.log(this.bookFormEditor)
  }
}
