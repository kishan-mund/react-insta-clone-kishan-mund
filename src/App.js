import React, { Component } from 'react';
import './App.css';
import SearchBar from './instagram/components/SearchBar/SearchBar.js';
import PostContainer from './instagram/components/PostContainer/PostContainer';


class App extends Component {
  render() {
    return (
      <div className="interface" >
        <SearchBar />
        <PostContainer />
      </div>
    );
  }
}

export default App; 
