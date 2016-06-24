import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Go shoot the moon.</h1>
        <SearchBar />
      </div>
    );
  }
}
