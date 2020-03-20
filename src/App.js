import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import HomePage from './components/pages/homepage/hompage.component'
import ShopPage from './components/pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUp from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path ='/' component={HomePage}></Route>
        <Route path ='/shop' component={ShopPage}></Route>
        <Route path ='/signin' component={SignInAndSignUp}></Route>

        </Switch>
    </div>
  );
}

export default App;
