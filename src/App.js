import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import Main from './components/Main';
import Login from './components/login/Login';
import ForgotPassword from './components/login/ForgotPassword';

export const UserContext = React.createContext();

function App() {
  const [loggedIn, isLoggedIn] = useState(false);

  return (

    <UserContext.Provider value={{id:10, role:""}}> 
      <Main />
      {/* <Router>
        <Row>
          {loggedIn ?
            <Col xl={2} md={2} style={{ padding: '0px' }}>
              <SideBar />
            </Col> : <></>}
          <Col xl={loggedIn ? 9 : 12} md={loggedIn ? 9 : 12}>
            <Switch>
              <Route exact path="/" >
                {loggedIn ? <Redirect to="/invoice" /> : <Redirect to="/login" />}
              </Route>
              <Route exact path="/login">
                {loggedIn ? <Redirect to="/dashboard" /> : <Login/>}
              </Route>
              <Route exact path="/password/forgot">
                <ForgotPassword />
              </Route>
              <Route exact path="/dashboard">
                
              </Route>
              
            </Switch>
          </Col>
        </Row>
      </Router> */}
    </UserContext.Provider>
  );
}

export default App;
