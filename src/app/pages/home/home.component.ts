import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books = []

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.getAll()
      .subscribe(
        (books: any) => {
          this.books = books
        },
        (error) => {
          console.error('Error getting books: ', error)
        }
      )
  }

}
