import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchApi } from '../actions/index';

class SearchBar extends React.Component{
  constructor(props){
    super(props);

    this.state = { term: '' };

    this.handleInputChange=this.handleInputChange.bind(this);
      this.handleFormSubmit=this.handleFormSubmit.bind(this);
  }
  handleInputChange(e){
    this.setState({ term: e.target.value });

  }
  handleFormSubmit(e){
    e.preventDefault();
    this.props.fetchApi(this.state.term);
    this.setState({ term: ''});
  }

  render(){
    return(
      <div>
        <form
          onSubmit={this.handleFormSubmit}
          className='input-group'>
          <input
            className='form-control'
            value={this.state.term}
            onChange={this.handleInputChange} />
          <span className='input-group-btn'>
            <button
              type='submit'
              className='btn btn-secondary'>Submit</button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchApi }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
