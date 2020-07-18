import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/checkout">
            <Header/>
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <Header/>
            <h1>Login</h1>
          </Route>
          {/*Default route */}
          <Route path="/">
            <Header />
            <Home/>
          </Route>
        </Switch>

      </Router>
      

    
      
    </div>
  );
}

export default App;
