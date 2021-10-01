import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import { Route, Switch } from "react-router-dom";
import Todo from "./components/Todo";
import { auth } from "./components/firebase";
const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} />
        <Switch>
          <Route exact path="/">
            <Todo user={user} />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
