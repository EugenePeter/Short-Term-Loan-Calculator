import React, { useContext, Suspense } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

// import Calculator from "./components/calculator/calculator.component";
import Navigation from "./components/navigation/navigation.component";
import "normalize.css";

// import DispatchContext from "./context/DispatchContext";
import StateContext from "./context/StateContext";

// import {
//   auth,
//   createUserProfileDocument,
//   signedInUser,
//   dd,
// } from "./components/firebase/firebase.utils";

// import SignIn from "./components/Form/sign-in/signIn.component";

import SignIn from "./components/sign-in/sign-in.component";

// import ApplicationState from "./pages/application-page/application.state.jsx";
// import ApplicationPage from "./pages/application-page/application-page";

import Home from "./pages/home/home";

import Warning from "./pages/application-page/warning.component";

// import MainApplication from "./pages/application-page/main-application.component";

import Register from "./components/register/register.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { setCurrentUser } from "./components/redux/user/user.actions";
import { selectCurrentUser } from "./components/redux/user/user.selectors";

import Dashboard from "./pages/dashboard/dashboard";

// import NextOfKin from "./pages/application-page/next-of-kin.page";

import Test from "./components/qualify-decision/test";

// import ClientDashboard from "./pages/dashboard/client-dashboard.page";

import LoanIndicator from "./components/loan-indicator/loan-indicator.component";

const ClientDashboard = React.lazy(() => import("./pages/dashboard/client-dashboard.page"));
const ApplicationState = React.lazy(() => import("./pages/application-page/application.state.jsx"));
const QualifyDecision = React.lazy(() =>
  import("./components/qualify-decision/qualify-decision.component")
);

// import Axios from "axios";
// Axios.defaults.baseURL =
//   process.env.BACKENDURL || "your heroku dot com goes here";

function App() {
  const appState = useContext(StateContext);

  // const appDispatch = useContext(DispatchContext);

  return (
    <div>
      <Suspense fallback={<div>loading</div>}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (appState.loggedIn ? <Redirect to="/dashboard" /> : <Home />)}
          />

          <Route
            exact
            path="/dashboard"
            render={() => (appState.loggedIn ? <Dashboard /> : <Redirect to="/" />)}
          />
          <Route
            exact
            path="/signin"
            render={() => (appState.loggedIn ? <Redirect to="/dashboard" /> : <SignIn />)}
          />

          <Route
            exact
            path="/apply"
            render={() => (appState.loggedIn ? <Redirect to="/dashboard" /> : <Register />)}
          />

          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/applicant/:id" component={Test} />
          <Route path="/profile/:username" component={ClientDashboard} />

          <Route exact path="/main-application" component={ApplicationState} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/warning" component={Warning} />
          <Route exact path="/signin">
            <SignIn />
          </Route>

          <Route exact path="/validating-applicant/:id" component={QualifyDecision} />
          <Route exact path="/svg/" component={LoanIndicator} />

          <Route
            exact
            path="/"
            render={() => (appState.loggedIn ? <Redirect to="/dashboard" /> : <Home />)}
          />
          <Route exact path="/client-dashboard/:username" component={ClientDashboard} />
        </Switch>
      </Suspense>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
