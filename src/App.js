import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import CategoryList from './Component/CategoryList';
import PhotoList from './Component/PhotoList';
import PhotoDetail from './Component/PhotoDetail'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Things I like</h1>
            <h3 className="creation">Created by:</h3>
            <h5 className="signature">Dino Ribeiro</h5>
          </header>
          <section className="main-body">
          <Switch>
            <Route path="/" exact component={CategoryList} />
            <Route path="/:category" exact component={PhotoList} />
            <Route path="/:category/:index" exact component={PhotoDetail} />
          </Switch>
          </section>
        </div>

      </Router>
      
    );
  }
}

export default App;
