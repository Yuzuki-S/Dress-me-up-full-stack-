import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from './Navbar'
import Login from "./Login";
import Register from "./Register";
import Package from "./Package";
import History from "./History";
import Help from "./Help";
import Sports from './Sports'
import Home from './Home'
import Contact from './Contact'
import Work from './Work'
import Casual from './Casual'
import ContactReceived from './ContactReceived'

const App = ({ auth }) => (
  <Router>
    <div id='app'>
      {/* <div id="App_video">
          <video id="bgvid" playsInline autoPlay muted loop>
            <source src="./video.mp4" type="video/mp4" />
          </video>
      </div> */}
      <Route path='/' component={Navbar} />


      <div className="App_main">
        {/* {!auth.isAuthenticated && <Route exact path="/" component={Login} />} */}
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
        <Route exact path='/Package' component={Package} />
        <Route path="/history" component={History} />
        <Route path="/about" component={Help} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/package/sports" component={Sports} />
        <Route path="/package/work" component={Work} />
        <Route path="/package/casual" component={Casual} />
        <Route path="/contact/confirmed" component={ContactReceived}/>
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
