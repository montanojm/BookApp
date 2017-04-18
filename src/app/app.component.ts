import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { bookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})


export class AppComponent implements OnInit {

  links: Array<Object>;
  title: string;

  showLink: boolean;

  constructor(private appService: AppService) {

  }

  ngOnInit() {

    this.title = 'Hello World!';
    this.links = [
      { text: 'Jessica', href: 'http://google.com' },
      { text: 'John', href: 'http://google.com' },
      { text: 'Mary', href: 'http://google.com' },
      { text: 'Link 4', href: 'http://google.com' },
      { text: 'Link 4', href: 'http://google.com' },
      { text: 'Link 5', href: 'http://google.com' },
      { text: 'Link 5', href: 'http://google.com' },
      { text: 'Link 4', href: 'http://google.com' },
      { text: 'Link 5', href: 'http://google.com' },
      { text: 'Link 5', href: 'http://google.com' },
      { text: 'Link 5', href: 'http://google.com' }
    ]

    this.showLink = true;
  }

  toggleLink() {
    this.showLink = this.appService.toggle(this.showLink);

    console.log('this.showLink is ...', this.showLink);
  }




}