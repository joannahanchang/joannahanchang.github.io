import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.scss';
import { About } from './about/about.js';

function App() {
  return (
    <div className="App">
	   <Router>
	        <nav>
	            <div className="nav-bar">
		              <Link className="nav-link" to="/">Home</Link>
		              <Link className="nav-link" to="/about">About</Link>
		              <Link className="nav-link" to="/users">Users</Link>
	            </div>
	        </nav>

	        <div>

		        <Switch>
		          <Route path="/about">
		            <About />
		          </Route>
		          <Route path="/users">
		          </Route>
		          <Route path="/">
		            Welcome to Jojo's coding dojos
		          </Route>
		        </Switch>
	        </div>
	    </Router>
    </div>
  );
}

export default App;
