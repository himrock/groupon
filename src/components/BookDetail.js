import React, { Component} from 'react'
import {connect} from 'react-redux';
import {removeBook, editBook} from '../actions/action'
import Modal from './Modal.js';

const mapDispatchToProps = (dispatch) =>{
    return {
        removeBook : (data)=>dispatch(removeBook(data)),
        editBook   : (data)=>dispatch(editBook(data))
    }
}

class BookDetail extends Component{
    constructor() {
        super();
        this.state = {
          show: false
        };
        //this.showModal = this.showModal.bind(this);
        //this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render(){
        const {removeBook, book} = this.props;
    return(
        <li>
            <div className="detail_left">
                <div className="title">{book.name}</div>
                <div className="author">{book.description}</div>
                <div className="author">Author : {book.author}</div>
                <div className="author">Count : {book.count}</div>
            </div>
            <div className="detail_right">
                {/* <button className="btn_edit" onClick={()=>editBook(book.id)}>Edit</button> */}
                <button className="btn_edit" onClick={this.showModal}>Edit</button>
                <button className="btn_edit" onClick={()=>removeBook(book.id)}>Delete</button>
            </div>
            <Modal book={book} show={this.state.show} handleClose={this.hideModal}>
                <p>Modal</p>
            </Modal>
        </li>
    )

    }
}

// BookDetail.defaultProps = {
//     name: "default name",
//     description: "default description",
//     author: "default author"
//   };



export default connect(null,mapDispatchToProps)(BookDetail);