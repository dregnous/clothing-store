import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import HomePage from './components/pages/homepage/hompage.component'
import ShopPage from './components/pages/shop/shop.component'


function App() {
  return (
    <div>
      <Switch>
        <Route exact path ='/' component={HomePage}></Route>
        <Route exact path ='/shop' component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
