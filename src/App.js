import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component'; 
import Header from './components/header/header.component'; 

function App() {
  return (
    <div>
      <Header/>
      <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/sign' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  )  
}

export default App;
