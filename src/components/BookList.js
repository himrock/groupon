import React, { Component } from 'react';
import BookDetail from './BookDetail';
import {connect} from 'react-redux';
import Search from './search'

const mapStateToProps = (state) => {
    return {
        bookList : state.BookList
    }
}

class BookList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            input: null,
        }
    }

    handleState = (inputState) => {
        this.setState({ input: inputState })
    }
    render(){
        const { books } = this.props.bookList;
        const items = books.filter((data) => {
            if (this.state.input == null)
                return data
            else if (data.name.toLowerCase().includes(this.state.input.toLowerCase())) {
                return data
            }
        }).map(book => {
            return (<BookDetail book={book} key={book.id}/>)
        })
        return(
            <div>
                <Search searchInput={this.handleState} />
                {
                    books && books.length ? (
                        <div className="book-list">
                            <ul>
                                {items}
                            </ul>
                        </div>
                    )
                    :
                    (
                        <div className="emplty">
                        Currently their is no book available :(
                        </div>
                    )
                }
            </div>      
    )
}
}

export default connect(mapStateToProps)(BookList);