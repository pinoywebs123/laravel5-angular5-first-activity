import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class BookService {

  base = 'http://127.0.0.1:8000/api/';
  constructor(
    public http: Http 
  ) { 

  }

  getBook(){
    return this.http.get(this.base+'user/book').map(
      (res: Response)=> {
        return res = res.json();
      },
      (err)=> err = err
    )
  }

  addBook(info: any){

    return this.http.post(this.base+'user/book', info).map(
      (res: Response)=> {
        return res = res.json();
      },
      (err: Response)=> {
        return err = err.json();
      }
    )
  }

  showBook(book_id){
    return this.http.get(this.base+'user/book/'+book_id).map
    (
      (res: Response)=> {
        return res= res.json();
      },
      (err)=> err = err
    )
  }

  deleteBook(book_id){
    return this.http.delete(this.base+'user/book/'+book_id).map(
      (res: Response)=> {
        return res = res.json();
      }
    )
  }

  updateBook(book_id, data: any){
    return this.http.patch(this.base+'user/book/'+book_id, data).map(
      (res: Response)=> {
        return res = res.json();
      }
    )
  }
}
