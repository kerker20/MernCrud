import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateFood from './components/CreateFood';
import ShowFoodList from './components/ShowFoodList';
import ShowFoodDetails from './components/ShowFoodDetails';
import UpdateFoodInfo from './components/UpdateFoodInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="home">
          <Route exact path='/' component={ShowFoodList} />
          <Route path='/create-food' component={CreateFood} />
          <Route path='/edit-food/:id' component={UpdateFoodInfo} />
          <Route path='/show-food/:id' component={ShowFoodDetails} />
        </div>
      </Router>
    );
  }
}

export default App;