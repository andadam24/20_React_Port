import React, { Component } from 'react';
import './index.css';
import { BrowserRouter, Switch, Route, Link, } from 'react-router-dom';
import Header from './components/header';
import About from './pages.about';
import Contact from './pages/contact';
import Homepage from './pages/homepage';
import Resume from '.pages/resume'
import Footer from './components/footer';

function App(){

  return(
   <BrowserRouter>
    <div className="container">
      <Header />
      <div className="heading">
        <Link to="/" className="links"> Home Page</Link>
        <Link to="departments" className="links"> About</Link>
        <Link to="/jobtitles" className="links"> Contact</Link>
        <Link to="/employees" className="links"> Resume</Link>
        </div>
        <Switch>
          <Route path='/' component={Homepage} exact />
          <Route path='/departments' component={About} />
          <Route path='/jobtitles' component={Contact} />
          <Route path='/employees' component={Resume} />

          </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;