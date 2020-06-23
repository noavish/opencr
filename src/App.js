import React, { createContext, useReducer } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Mentor from "./components/Mentor";
import Maker from "./components/Maker";
import NavBar from "./components/NavBar";
import { initialState, reducer } from "./store/reducer";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCode, faCodeBranch, faTasks } from '@fortawesome/free-solid-svg-icons'
 
library.add(fab, faCode, faCodeBranch, faTasks)


export const AuthContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT"
    });
  } 

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
    <NavBar handleLogout={handleLogout} />
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/maker" render={() => <Maker />} />
        <Route exact path="/mentor" render={() => <Mentor />} />
      </Switch>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
