import React, { useEffect } from "react";
import "./App.css";
import { useImmerReducer } from "use-immer";

import DispatchContext from "./context/DispatchContext";
import StateContext from "./context/StateContext";

import App from "./App";

import "normalize.css";

import Axios from "axios";
Axios.defaults.baseURL =
  process.env.BACKENDURL || "your heroku dot com goes here";

function UserGlobal() {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("appToken")),
    flashMessages: [],
    user: {
      token: localStorage.getItem("appToken"),
      username: localStorage.getItem("appUsername"),
    },
    isSearchOpen: false,
    isChatOpen: false,
    unreadChatCount: 0,
    test: "test",
  };

  function ourReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true;
        draft.user = action.data;
        return;
      case "logout":
        draft.loggedIn = false;
        return;
    }
  }
  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  useEffect(() => {
    if (state.loggedIn) {
      localStorage.setItem("appToken", state.user.token);
      localStorage.setItem("appUsername", state.user.username);
      // localStorage.setItem("complexappAvatar", state.user.avatar);
    } else {
      localStorage.removeItem("appToken");
      localStorage.removeItem("appUsername");
      // localStorage.removeItem("complexappAvatar");
    }
  }, [state.loggedIn]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <App />
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default UserGlobal;
