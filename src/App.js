import React, { Component} from 'react';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';

import Calculator from './components/calculator/calculator.component';

import Navigation from './components/navigation/navigation.component';

import 'normalize.css';


import { auth, createUserProfileDocument } from './components/firebase/firebase.utils';

import SignIn from './components/Form/sign-in/signIn.component';

import ApplicationPage from './pages/application-page/application-page';

import Home from './pages/home/home';

import { WarningContainer } from './pages/application-page/application-page.styles';

import MainApplication from './pages/application-page/main-application.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
      console.log(user.displayName)
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {

    console.log("mao kini " + this.state.currentUser);

    return (
      <div>
          <Navigation currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path = '/'
              render={()=> this.state.currentUser ? 
                (<Redirect to = '/application-page' />)
                :
                (<Home/>)
              }  
            />

            <Route exact path = '/application-page'
              render={()=> this.state.currentUser ? 
                (<ApplicationPage />)
                :
                (<Redirect to = '/' />)
              }  
            />

            <Route exact path = '/signin' 
            render={() =>
              this.state.currentUser ? (
                <Redirect to='/application-page' />
              ) : (
                <Calculator />
              )
            }
            />

            <Route exact path='/main-application' component={MainApplication} /> 
          </Switch>
      </div>
    );
  }
}

export default App;
