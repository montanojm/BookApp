import {Component, Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs';

@Injectable()
export class BookService {

    // this is where the variables go

apiUrl: string;

    constructor(
        private http:Http
    ) {
        // do init stuff
        this.apiUrl = 'http://localhost:8000/api/';
    }

    getBooks(): Promise<Array<Object>> {
        return this.http.get(`${this.apiUrl}/books`).toPromise().then((resp) => {
            let books = resp.json():
            console.log('books',books);
            return books; 
        });

    }

    getBooksById(bookId): Promise<Object> {
        return this.http.get(`${this.apiUrl}/books/id/$(bookId)`).toPromise().then((resp) => {
            let book = resp.json():
            console.log('book',book);
            return book; 
        });
    }

    addBook(book): Promise<Object> {
        return this.http.post(`${this.apiUrl}/books`).toPromise().then((resp) => {
            let book = resp.json():
            console.log('book',book);
            return book; 
        });
    }

    // this is where the function goes..


    toggle(prop:boolean) {
        let output = !prop;
         console.log('from app.service toggle method.......', output);
        return output;
        
    }
}