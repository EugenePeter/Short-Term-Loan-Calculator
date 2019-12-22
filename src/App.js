import React, { Component} from 'react';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';

import Calculator from './components/calculator/calculator.component';

import Navigation from './components/navigation/navigation.component';

import 'normalize.css';


import { auth, createUserProfileDocument } from './components/firebase/firebase.utils';

import SignIn from './components/Form/sign-in/signIn.component';

import SignUp from './components/Form/sign-up/sign-up.component';

import ApplicationPage from './pages/application-page/application-page';

import Home from './pages/home/home';

import { WarningContainer } from './pages/application-page/application-page.styles';

import MainApplication from './pages/application-page/main-application.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
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
            <Route exact path='/signup' 
               render={() =>
                  this.state.currentUser ? (
                  <Redirect to='/application-page' />
                  ) : (
                  <SignUp />
                  )
                }
         /> 
          </Switch>
      </div>
    );
  }
}

export default App;
