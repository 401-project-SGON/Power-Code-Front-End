import React from 'react';
import Auth from './components/auth/auth.js';
import Login from './components/auth/login.js';
import Data from './components/data/index.js';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/home/home.js';
import AboutPage from './components/about/about.js';
import Header from './components/common/header.js';
import NotFound from './components/notFound.js';
import Footer from './components/common/footer';
import ContactUs from './components/contactus/contactUs.js';


const User = props => {
  return (
    <Auth capability="read">
      <Data/>
    </Auth>
  );
};

const Editor = props => {
  return (
    <Auth capability="update">
    </Auth>
  );
};

const Admin = props => {
  return (
    <Auth capability="delete">
    </Auth>
  );
};

const App = (props)=> {


  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/contactUs" component={ContactUs}/>
        <Route component={NotFound}/>
      </Switch>

      <Login />
      <hr />
      <User/>
      <Editor />
      <Admin />
      <Footer/>
    </>
  );

};

export default App;
