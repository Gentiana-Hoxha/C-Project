import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../app.services';

@Component({
  selector: 'app-book-cards',
  templateUrl: './book-cards.component.html',
  styleUrls: ['./book-cards.component.scss']
})
export class BookCardsComponent implements OnInit {
  @Input() books : any;

  constructor(private bookServices : BookService) { }

  onDelete(id:string){
    this.bookServices.onDeleteBook(id);
  }

  ngOnInit(): void {
    
  }
}
