import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../app.services';
import { BookCardFormComponent } from '../book-card-form/book-card-form.component';


@Component({
  selector: 'app-book-cards',
  templateUrl: './book-cards.component.html',
  styleUrls: ['./book-cards.component.scss']
})
export class BookCardsComponent implements OnInit {
  wantToDelete= false;
  @Input() books : any;

  constructor(private bookServices : BookService, private bookCardFormComponent : BookCardFormComponent) { }
  deletePopup(){
    this.wantToDelete = true
  }
  resetDelete(){
    this.wantToDelete = false
  }
  onDelete(id:string){
    this.resetDelete()
    this.bookServices.onDeleteBook(id);
  }

  ngOnInit(): void {
  }
}
