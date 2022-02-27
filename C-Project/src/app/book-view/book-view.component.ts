import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../app.services';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit {
  book: any;
  loading : boolean = true;

  constructor(private bookService: BookService, private route : ActivatedRoute) { }

  ngOnInit( ): void {

    this.bookService.onGetBook(this.route.snapshot.params['id']).then(res=>{
      this.book=res;
      this.loading = false;
    });
  }

}
