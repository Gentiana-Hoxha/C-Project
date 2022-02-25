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

  constructor() { }

  ngOnInit(): void {
    this.bookFormEditor = new FormGroup({
      "mainData": new FormGroup({
        'bookAuthor': new FormControl('', [Validators.required, Validators.maxLength(50)]),
        'bookTitle': new FormControl('',Validators.required),
      }),
      "secondaryData": new FormGroup({
        'bookGenre': new FormControl('Action'),
        'bookPublishedDate': new FormControl(''),
        'bookStatus': new FormControl(''),
        'bookSynopsis': new FormControl('')
      })
    });

    this.bookFormEditor.valueChanges.subscribe(value =>{
      console.log(value)
    })
  }

  


  onSubmit(){
    console.log(this.bookFormEditor)
  }
}
