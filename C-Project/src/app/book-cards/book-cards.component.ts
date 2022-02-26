import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-cards',
  templateUrl: './book-cards.component.html',
  styleUrls: ['./book-cards.component.scss']
})
export class BookCardsComponent implements OnInit {
  @Input() books : any;

  constructor() { }

  ngOnInit(): void {
    
  }
}
