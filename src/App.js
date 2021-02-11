import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarWrapper from "./components/Navbar/NavbarWrapper";
import Home from "./components/productpages/Home";
import ProductCard from "./components/Product/ProductCard";
import ProductDetail from "./components/Product/ProductDetail";
import MensProducts from "./components/productpages/MensProducts";
import WomensProducts from "./components/productpages/WomensProducts";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarWrapper />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/productdetail/:id" exact component={ProductDetail} />
          <Route path="/mensapperals" exact component={MensProducts} />
          <Route path="/womensapperals" component={WomensProducts} />
          <Route path="/mycart" exact component={Cart} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
