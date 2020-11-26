import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Admin from "./Components/Admin";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import SignUp from "./Components/SignUp";
import Album from "./Components/Album";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import AddressForm from "./Components/Checkout/AddressForm";
import Checkout from "./Components/Checkout/Checkout";
import Review from "./Components/Checkout/Review";
import PaymentForm from "./Components/Checkout/PaymentForm";
import NavBar from "./Components/Home/NavBar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Slideshow from "./Components/Slideshow/Slideshow";
import Footer from "./Components/Footer/Footer";
import Product from "./Components/Product/Product";
import Cart from "./Components/Cart/Cart";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/review" component={Review}></Route>
            <Route exact path="/paymentform" component={PaymentForm}></Route>
            <Route exact path="/addressform" component={AddressForm}></Route>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/admin" component={Admin}></Route>
            <Route exact path="/logout" component={Logout}></Route>
            <Route exact path="/signup" component={SignUp}></Route>
            <Route exact path="/album" component={Album}></Route>
            <Route exact path="/header" component={Header}></Route>
            <Route exact path="/checkout" component={Checkout}></Route>
            <Route exact path="/navbar" component={NavBar}></Route>
            <Route exact path="/dashboard" component={Dashboard}></Route>
            <Route exact path="/slidewhow" component={Slideshow}></Route>
            <Route exact path="/footer" component={Footer}></Route>
            <Route exact path="/product" component={Product}></Route>
            <Route exact path="/header" component={Header}></Route>
            <Route exact path="/cart" component={Cart}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
