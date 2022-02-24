import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-book-card-form-wizard',
  templateUrl: './book-card-form-wizard.component.html',
  styleUrls: ['./book-card-form-wizard.component.scss']
})
export class BookCardFormWizardComponent implements OnInit {
  @ViewChild('f') bookForm!: NgForm;

  constructor() { }
  ngOnInit(): void {
  }
  // onSubmit(form:NgForm){
  //   alert("SUBMITED THE FORM!");
  //   console.log(form)
  // }
  onSubmit(){
    console.log(this.bookForm)
  }
}
