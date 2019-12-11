import React, { Component} from 'react';
import './App.css';
import Calculator from './components/calculator/calculator.component';

import Navigation from './components/navigation/navigation.component';

import 'normalize.css';


import { auth, createUserProfileDocument } from './components/firebase/firebase.utils';

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
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App-header">
          <Navigation currentUser={this.state.currentUser} />
          <Calculator className="Calculator" />
      </div>
    );
  }
}

export default App;
