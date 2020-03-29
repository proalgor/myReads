import React,{Component} from 'react';
import {Link} from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import Book from './Book';


class SearchBooks extends Component{
    state = {
        books:[]
    }
    search = (query) => {
        BooksAPI.search(query)
            .then((result)=> this.setState(()=>({
                books: result,
            }))
            )
    };
    render() {
        const {books}= this.state
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">

                        <input type="text" placeholder="Search by title or author"
                                onChange={(event)=>this.search(event.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books!==undefined && books.map((book,index)=>(<Book key={index} book={book}/>))}
                        {console.log(this.state.books)}
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchBooks