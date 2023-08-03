import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ProductList from "./ProductList";
import Product from "./Product";
import Cart from "./Cart";

const Home = () => {
  return (
    <Router>
      <div>
        <Announcement />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Slider />
            <Categories />
            <Products />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/productlist">
            <ProductList />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
        <Newsletter />
        <Footer />
      </div>
    </Router>
  );
};

export default Home;
