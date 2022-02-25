import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-card-form-wizard',
  templateUrl: './book-card-form-wizard.component.html',
  styleUrls: ['./book-card-form-wizard.component.scss']
})


export class BookCardFormWizardComponent implements OnInit {
  bookFormWizard!: FormGroup;

  bookGenres = ["Action", "Romance"];

  constructor() { }

  ngOnInit(): void {
    this.bookFormWizard = new FormGroup({
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

    this.bookFormWizard.valueChanges.subscribe(value =>{
      console.log(value)
    })
  }

  


  onSubmit(){
    console.log(this.bookFormWizard)
  }
}
