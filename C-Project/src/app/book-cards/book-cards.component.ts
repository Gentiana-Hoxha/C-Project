import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../app.services';
import { BookCardFormComponent } from '../book-card-form/book-card-form.component';


@Component({
  selector: 'app-book-cards',
  templateUrl: './book-cards.component.html',
  styleUrls: ['./book-cards.component.scss']
})
export class BookCardsComponent implements OnInit {

  @Input() books : any;

  constructor(private bookServices : BookService, private bookCardFormComponent : BookCardFormComponent) { }

  onDelete(id:string){
    this.bookServices.onDeleteBook(id);
  }
  onEdit(id:String , status:String){
  }

  ngOnInit(): void {
    
  }
}
