import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-book-card-form-wizard',
  templateUrl: './book-card-form-wizard.component.html',
  styleUrls: ['./book-card-form-wizard.component.scss']
})
export class BookCardFormWizardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    alert("SUBMITED THE FORM!")
  }

}
