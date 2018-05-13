import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  book1 : any;
  books: any;
  id : number;
  error = [];
  appForm: FormGroup
  constructor(
    public book: BookService
  ) { }

  ngOnInit() {
    this.appForm = new FormGroup({
      'book_name': new FormControl(null, Validators.required),
      'author_name': new FormControl(null, Validators.required)
    })

    this.displayBooks();
    
  }

  onSubmit(){
    
    this.book.addBook(this.appForm.value).subscribe(
      (res)=> {
        console.log(res);
        this.displayBooks();
      },
      (error)=>{
        this.errorHandle(error.json());
      }
    )
  }

  displayBooks(){
    this.book.getBook().subscribe(
      (res)=> console.log(this.books = res['message']),
      (err)=> console.log(err)
    )
  }

  showBook(book_id){
    console.log(book_id);
    this.book.showBook(book_id).subscribe(
      (res)=> console.log(this.book1 = res),
      (err)=> console.log(err)
    )
  }

  showBook2(book_id){
    
    this.book.showBook(book_id).subscribe(
      (res)=> {
        this.book1 = res;
        this.id = res.id;
        console.log(this.id);
      },
      (err)=> console.log(err)
    )
  }

  onUpdate(){
    console.log(this.appForm.value);
    this.book.updateBook(this.id, this.appForm.value).subscribe(
      (res)=> {
       if(res['message'] == "true"){
        this.displayBooks();
       }
      },
      (err)=> console.log(err)
    )
  }


  deleteBook(book_id){
    console.log(book_id);
    this.book.deleteBook(book_id).subscribe(
      (res)=> {
        console.log(res);
        this.displayBooks();
      },
      (err)=> console.log(err)
    )
  }

  errorHandle(error){
    console.log(this.error = error.errors);
  }

}
