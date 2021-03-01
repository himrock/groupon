import { Component } from 'react';
import '../styles/modal.css';
import {connect} from 'react-redux';
import {editBook} from '../actions/action'

class Modal extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            author: '',
            description: '',
            id: null
        };
    }

    componentDidMount(){
        const {book} = this.props;
        this.setState({
            name: book.name,
            author: book.author,
            description: book.description,
            id : book.id
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.editBook(this.state.name, this.state.description, this.state.author, this.state.id)
        this.props.handleClose();
    }
    
    render() {
        const {show,handleClose} = this.props;
        const showHideClassName = show ? "modal display-block" : "modal display-none";
        return (
            <div className={showHideClassName}>
                <section className="modal-main">
                    <input type="text" placeholder="Book Name..." value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })} required />
                    <input type="text" placeholder="Book Description..." value={this.state.description}
                        onChange={(e) => this.setState({ description: e.target.value })} required />
                    <input type="text" placeholder="Author Name..." value={this.state.author}
                        onChange={(e) => this.setState({ author: e.target.value })} required />
                    <div className="update_div">
                        <button type="submit" onClick={(e)=>this.handleSubmit(e)}>Update Book</button>
                        <button type="button" onClick={handleClose}>
                            Close
                        </button>
                    </div>
                </section>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        editBook : (name,description,author,id)=>dispatch(editBook(name,description,author,id))
    }
}

export default connect(null,mapDispatchToProps)(Modal)