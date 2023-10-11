import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import { Home } from "./render/Home";
import { Contact } from "./render/Contact";
import { Cart } from "./render/Cart";
import { Error } from "./render/Error";
import { Product } from "./render/Product";
import { CheckoutSuccess } from "./render/CheckoutSuccess";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="CheckoutSuccess" element={<CheckoutSuccess />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
