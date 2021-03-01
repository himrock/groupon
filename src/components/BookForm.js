import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addBook} from '../actions/action'


const mapDispatchToProps = (dispatch) => {
  return {
    addBook : (name,description,author)=>dispatch(addBook(name,description,author))
  }
}

class BookForm extends Component{

    state = {
        name : '',
        author : '',
        description : ''
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addBook(this.state.name, this.state.description, this.state.author)
        this.setState({
          name : '',
          author : '',
          description : ''
        })
    }

    render(){

    return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Book Name..." value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })} required />
          <input type="text" placeholder="Book Description..." value={this.state.description}
            onChange={(e) => this.setState({ description: e.target.value })} required />
          <input type="text" placeholder="Author Name..." value={this.state.author}
            onChange={(e) => this.setState({ author: e.target.value })} required />
          <button type="submit">Add Book</button>
        </form>
      );
    }
}
export default connect(null, mapDispatchToProps)(BookForm);