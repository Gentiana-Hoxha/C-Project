import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { windowWhen } from 'rxjs';
import { BookService } from '../app.services';

@Component({
  selector: 'app-book-card-form-wizard',
  templateUrl: './book-card-form-wizard.component.html',
  styleUrls: ['./book-card-form-wizard.component.scss']
})


export class BookCardFormWizardComponent implements OnInit {
  bookFormWizard!: FormGroup;
  stepIndex: number = 1;
  bookGenres = ["Action", "Romance"];

  constructor(private http: HttpClient,  private bookService: BookService) { }

  handleStep(step: number){
    this.stepIndex = step;
  }

  onEditBook(bookData: any){
  }

  ngOnInit(): void {
    this.bookFormWizard = new FormGroup({
      "mainData": new FormGroup({
        'bookTitle': new FormControl('',Validators.required),
        'bookAuthor': new FormControl('', [Validators.required, Validators.maxLength(50)])
      }),
      "secondaryData": new FormGroup({
        'bookGenre': new FormControl('Action'),
        'bookPublishedDate': new FormControl(''),
        'bookStatus': new FormControl('Progress'),
        'bookSynopsis': new FormControl(''),
        'bookImageURL': new FormControl(''),
      }),
      "bookEditable": new FormControl(''),
      "bookDeletable": new FormControl('')
    });

    // this.bookFormWizard.valueChanges.subscribe(value=>{
    //   this.onEditBook(value);
    // });
  }
  onSubmit(){
    this.bookService.onCreateBook(this.bookFormWizard.value);
  }
}
