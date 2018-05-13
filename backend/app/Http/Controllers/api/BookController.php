<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Book;
class BookController extends Controller
{
    
    public function index()
    {
        $books = Book::all();
        return response()->json(['message'=> $books]);
    }

   
    public function create()
    {
        //
    }

    
    public function store(Request $request)
    {
        $this->validate($request, [
            'book_name'=> 'required|unique:books',
            'author_name'=> 'required'

        ]);
        $book = new Book;
        $book->book_name = $request->input('book_name');
        $book->author_name = $request->input('author_name');
        $book->save();
        return response()->json(['message'=> 'success']);
    }

   
    public function show($id)
    {
        $book = Book::findOrFail($id);
        return response()->json($book);
    }

   
    public function edit($id)
    {
        //
    }

   
    public function update(Request $request, $id)
    {
        $update = Book::where('id', $id)->update(
            [
                'book_name'=> $request->input('book_name'),
                'author_name'=> $request->input('author_name')    
            ]
            );
        if($update){
            return response()->json(['message'=> 'true']);
    
        }    
       
    }

   
    public function destroy($id)
    {
        
        $find = Book::findOrFail($id);
        if($find){
            $find->delete();
            return response()->json(['message'=> 'Deleted successfully!']);
        }
    }
}
