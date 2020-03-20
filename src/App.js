import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import HomePage from './components/pages/homepage/hompage.component'

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path ='/' component={HomePage}></Route>
        <Route exact path ='/shop/hats' component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
