import React, { Component } from "react";
import "./App.css";

import { Switch, Route, Redirect } from "react-router-dom";

import Calculator from "./components/calculator/calculator.component";

import Navigation from "./components/navigation/navigation.component";

import "normalize.css";

import {
  auth,
  createUserProfileDocument,
  signedInUser,
  dd,
} from "./components/firebase/firebase.utils";

import SignIn from "./components/Form/sign-in/signIn.component";

import SignUp from "./components/Form/sign-up/sign-up.component";

import ApplicationState from "./pages/application-page/application.state.jsx";
import ApplicationPage from "./pages/application-page/application-page";

import Home from "./pages/home/home";

import Warning from "./pages/application-page/warning.component";

import MainApplication from "./pages/application-page/main-application.component";

import Register from "./components/register/register.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { setCurrentUser } from "./components/redux/user/user.actions";
import { selectCurrentUser } from "./components/redux/user/user.selectors";

import { Container } from "./global-styles/global.styles";

import Axios from "axios";
Axios.defaults.baseURL =
  process.env.BACKENDURL || "your heroku dot com goes here";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log("mao kini " + this.props.currentUser);

    return (
      <div>
        <Navigation />
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/application-page" />
              ) : (
                <Home />
              )
            }
          />
          <Route
            exact
            path="/application-page"
            render={() =>
              this.props.currentUser ? <ApplicationPage /> : <Redirect to="/" />
            }
          />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/application-page" />
              ) : (
                <Container>
                  <Calculator />
                </Container>
              )
            }
          />
          <Route exact path="/main-application" component={ApplicationState} />
          <Route exact path="/warning" component={Warning} />
          // <Route exact path="/apply" component={Register} />
          <Route
            exact
            path="/main-application"
            render={() => (this.props.currentUser ? "" : <Home />)}
          />
          <Route
            exact
            path="/signup"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/application-page" />
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
