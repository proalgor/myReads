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

    render() {
    return (
        <div>
        <Route exact path='/'
               render={()=>(
                   <Home books={this.state.books}/>
               )}
        />
        <Route path='/search'
               component={SearchBooks}
        />
        </div>
    )
  }
}

export default BooksApp
