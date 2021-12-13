import React, {useEffect} from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "firebase";
import {useStateValue} from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"

const promise = loadStripe('pk_test_51JxmwiSDAmCs3ZvnBIWwe3oYSGTjLzkSkVsUKSEUHS267mu0Kg6iyzCKNpf4m2wwhF4KDMhAAZBxqcpqBbc3j1ex00Bazflzjs');

function App() {
  const [{},dispatch]=useStateValue();
  useEffect(() => {
    auth().onAuthStateChanged(authUser => {
      console.log('Hello',authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else{
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    });
  }, [])
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
            <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
