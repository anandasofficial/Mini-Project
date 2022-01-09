import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Cart from "./Cart";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import Login from "./Login";
import UserAuth from "./UserAuth";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Taskers from "./Taskers";
import TaskerLogin from "./TaskerLogin";
import TaskerLoginHeader from "./TaskerLoginHeader";
import TaskerHomePage from "./TaskerHomePage";
import Services from "./Services";
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/taskerhomepage">
            <TaskerHomePage />
          </Route>
          <Route path="/services">
            <Header />
            <Services />
          </Route>
          <Route path="/taskerlogin">
            <TaskerLoginHeader />
            <TaskerLogin />
          </Route>
          <Route path="/login">
            <Login />
            <UserAuth />
          </Route>

          <Route path="/Cart">
            <Header />
            <Cart />

          </Route>
         
          <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
