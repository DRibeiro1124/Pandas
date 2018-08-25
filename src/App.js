import React, { Component } from 'react';
import './App.css';
import CategoryList from './Component/CategoryList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Things I like</h1>
          <h3 className="">Created by:</h3>
          <h5 className="">Dino Ribeiro</h5>
        </header>
        <section className="main-body">
          <CategoryList />
        </section>
      </div>
    );
  }
}

export default App;
