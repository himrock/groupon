import React, { Component } from 'react'
let globalTimeout = null;

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }
    SearchFunc = () => {
        this.props.searchInput(this.state.input);
    }
    searchSpace = (event) => {
        this.setState({ input: event.target.value })
        if (globalTimeout != null) {
            clearTimeout(globalTimeout);
        }
        globalTimeout = setTimeout(this.SearchFunc, 500);
    }
    render() {
        return (
            <div className="search_wrapper">
                <input type="text" placeholder="Search By Book Name..." onChange={(e) => this.searchSpace(e)} value={this.state.input} />
                <button className="btn_search">Search</button>
            </div>
        )
    }
}


export default Search;