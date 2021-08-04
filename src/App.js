import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component'; 
import CheckoutPage from './pages/checkout/checkout.component';
import { addCollectionAndDocuments, auth, createUserProfileDocument } from './firebase/firebase.utils';
import Header from './components/header/header.component'; 

import { setCurrentUser } from './redux/user/user.actions';
import { selectCollectionForPreview } from './redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
 
class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount(){

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id:snapshot.id,
            ...snapshot.data()
          })
        });
       
      }else{
        setCurrentUser(userAuth);
      }
      // fonction send programmatically data to firestore
      // addCollectionAndDocuments('collections', collectionsArray.map( ({title, items}) => ({title, items}) ) );
  })




  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route  path='/shop' component={ShopPage}/>
            <Route exact path='/checkout' component={CheckoutPage}/>
            <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage/>)} />
        </Switch>
      </div>
    )
  }


}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionForPreview

})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
