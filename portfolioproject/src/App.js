import React from 'react';
import './index.css';
import { BrowserRouter, Switch, Route, Link, } from 'react-router-dom';
import Header from './components/header';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Resume from './pages/resume';


function App(){

  return(
   <BrowserRouter>
    <div>
      <Header />
      <div className="heading">
        <Link to="/" className="links"> About</Link>
        <Link to="/projects" className="links"> Projects</Link>
        <Link to="/contact" className="links"> Contact</Link>
        <Link to="/resume" className="links"> Resume</Link>
        </div>
        <Switch>
          <Route path='/' component={About} exact />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
          <Route path='/resume' component={Resume} />

          </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;