import React from "react";

import "./App.scss";
import Sidebar from "./modules/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./modules/Header/Header";
import { ActivityContainer } from "./modules/ActivityContainer/ActivityContainer";
import { useState } from "react";
import { AuthContainer } from "./modules/LoginPage/AuthContainer";
import { Actions } from "./modules/Actions/Actions";
import { DashBoard } from "./modules/DashBoard/DashBoard";
import { Blog } from "./modules/Blog/Blog";

function App() {
  const [authStatus, setAuthStatus] = useState(false);

  return (
    <div className="App">
      <Router>
        <Sidebar />
        {/* {authStatus &&  <Sidebar />} можно по пробывать так когда будет норм логин работать
        {authStatus &&  <Header />} */}
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            // render={() => {
            //   return authStatus ? (
            //     <Redirect to="/home" />
            //   ) : (
            //     <Redirect to="/auth" />
            //   );
            // }}
          />
          <Route path="/home">
            <div className="App">
              <ActivityContainer />
            </div>
          </Route>
          <Route exact path="/wishes">
            {/* <GiftLogo className="logo" /> */}
            <div>Желания</div>
          </Route>
          <Route path="/about">
            <Actions />
          </Route>
          <Route path="/dashboard">
            <DashBoard />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/auth">
            <AuthContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
