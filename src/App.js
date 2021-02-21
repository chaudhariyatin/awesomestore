import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarWrapper from "./components/Navbar/NavbarWrapper";
import Home from "./components/productpages/Home";
import ProductCard from "./components/Product/ProductCard";
import ProductDetail from "./components/Product/ProductDetail";
import MensProducts from "./components/productpages/MensProducts";
import WomensProducts from "./components/productpages/WomensProducts";
import Cart from "./components/Cart/Cart";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import Checkout from "./components/checkout/Checkout";
import Orders from "./components/Orders/Orders";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import SpinnerWrapper from "./components/UI/SpinnerWrapper";
import SearchResults from "./components/search/SearchResults";

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <SpinnerWrapper />;
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <AuthIsLoaded>
        <div className="App">
          <NavbarWrapper />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/searchedresults" exact component={SearchResults} />
            <Route path="/productdetail/:id" exact component={ProductDetail} />
            <Route path="/mensapperals" exact component={MensProducts} />
            <Route path="/womensapperals" component={WomensProducts} />
            <Route path="/mycart" exact component={Cart} />
            <Route path="/myorders" exact component={Orders} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/checkout" exact component={Checkout} />
          </Switch>
        </div>
      </AuthIsLoaded>
    </BrowserRouter>
  );
}

export default App;
