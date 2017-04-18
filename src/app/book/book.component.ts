import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() {
    goToCreate(){
      console.log('go to create...');
      this.router.navigate(['create']);
    } 

    deleteBook(id:sting){
      console.log('')
      this.BookService.deleteBook(id);  
    }

  ngOnInit() {
  }

}
