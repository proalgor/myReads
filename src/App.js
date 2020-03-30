import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom';
import Home from './Home'
import SearchBooks from "./SearchBooks";
import './App.css'

class BooksApp extends React.Component {
  state = {

    books:[]

  }

  componentDidMount() {
    BooksAPI.getAll()
        .then((result)=>{
            this.setState(()=>({
                books:result
            }))
        })
  }

  onChange =(shelf,book)=>{
      book.shelf = shelf
      BooksAPI.update(book,shelf)
          .then((result)=>{
              this.setState((currentState)=>({
                  books: currentState.books.filter((c)=> c.id !== book.id).concat(book)
              }))

          }
          )

  }

    render() {
    return (
        <div>
        <Route exact path='/'
               render={()=>(
                   <Home books={this.state.books} change={this.onChange}/>
               )}
        />
        <Route path='/search'
               render={()=>(
                   <SearchBooks change={this.onChange}/>
               )}
        />
        </div>
    )
  }
}

export default BooksApp
