import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from './Navbar'
import Login from "./Login";
import Register from "./Register";
import Meeting from "./Meeting";
import History from "./History";
import Help from "./Help";
import Sports from './Sports'

const App = ({ auth }) => (
  <Router>
    <div id='app'>
      <div id="App_video">
          <video id="bgvid" playsInline autoPlay muted loop>
            <source src="./video.mp4" type="video/mp4" />
          </video>
      </div>
      <Route path='/' component={Navbar} />


      <div className="">
        {/* {!auth.isAuthenticated && <Route exact path="/" component={Login} />} */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
        <Route path="/meeting" component={Meeting} />
        <Route path="/history" component={History} />
        <Route path="/about" component={Help} />
        <Route path="/package/sports" component={Sports} />
      </div>
    </div>
  </Router>
);

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(App);
