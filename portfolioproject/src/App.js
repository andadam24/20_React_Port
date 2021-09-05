import React from 'react';
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
    <div>
      <Header />
      <div className="heading">
        <Link to="/" className="links"> Home Page</Link>
        <Link to="about" className="links"> About</Link>
        <Link to="/contact" className="links"> Contact</Link>
        <Link to="/resume" className="links"> Resume</Link>
        </div>
        <Switch>
          <Route path='/' component={Homepage} exact />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/resume' component={Resume} />

          </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;