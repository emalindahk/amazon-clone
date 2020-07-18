import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
          {/*Default route */}
          <Route path="/">
            <Header />
            <h1>Home Page</h1>
          </Route>
        </Switch>

      </Router>
      

    
      
    </div>
  );
}

export default App;