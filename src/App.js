import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { Helmet } from 'react-helmet';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  //Piece of code which runs based on a given condition(useEffect)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      <Helmet>
      <title>Amazon Clone</title>
<meta name="description" content="Amazon Clone in ReactJs"/>

{/* <!-- Google / Search Engine Tags --> */}
<meta itemprop="name" content="Amazon Clone"/>
<meta itemprop="description" content="Amazon Clone in ReactJs"/>
<meta itemprop="image" content="https://live.staticflickr.com/65535/50607536646_c1e04e6f08_c.jpg"/>

{/* <!-- Facebook Meta Tags --> */}
<meta property="og:url" content="https://clone-a0ee9.firebaseapp.com"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="Amazon Clone"/>
<meta property="og:description" content="Amazon Clone in ReactJs"/>
<meta property="og:image" content="https://live.staticflickr.com/65535/50607536646_c1e04e6f08_c.jpg"/>

{/* <!-- Twitter Meta Tags --> */}
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Amazon Clone"/>
<meta name="twitter:description" content="Amazon Clone in ReactJs"/>
<meta name="twitter:image" content="https://live.staticflickr.com/65535/50607536646_c1e04e6f08_c.jpg"/> 
      </Helmet>
      <Router>
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          {/*Default route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
