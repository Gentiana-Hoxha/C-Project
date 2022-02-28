import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BookService } from '../app.services';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

//https://www.youtube.com/watch?v=TIGj7KzXtxg

export class SearchBarComponent implements OnInit {
  // BookCards : any = [];
  // loading : boolean = true;
  // searchInput: any ='';
  // SearchForm!: FormGroup;

  constructor( private bookService: BookService) { }

  ngOnInit(): void {
    // this.searchInput = this.SearchForm.value;
    // this.searchInput = new FormGroup({
    //   'searchInput': this.searchInput
    // });

    // this.SearchForm.valueChanges.subscribe((input : any) =>{
    //   console.log("smth")
    // });

    // this.bookService.onGetBooks().then((res : any)=>{
    //   let k: keyof typeof res;
    //     for (k in res){
    //       if(res.hasOwnProperty(k)&& this.BookCards.filter((book:any) => JSON.stringify(book).indexOf(this.searchInput) > - 1)){
    //         this.BookCards.push({...res[k], id: k})
    //       }
    //     }
    //   this.loading = false;
    // });

  }
  onSubmit(){}
}
