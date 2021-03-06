import React, { Component } from 'react';
// stateful component to hold search field
export default class Form extends Component {
// state is for updating the value of the input element
  state = {
    searchText: ''
  }
// updates input
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }
// send input value up to container to execute search
  handleSubmit = e => {
    let subject = this.term.value;
    e.preventDefault();
    this.props.onSearch(subject, true);
    e.currentTarget.reset();
  }
// render input and search button 
render(){
    return (
      <form onSubmit={this.handleSubmit} className="search-form">
        <input ref={(input) => this.term = input} onChange={this.onSearchChange} type="search" name="search" placeholder="Search" required/>
        <button type="submit" className="search-button">
          <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </button>
      </form>
    );
  }

}
