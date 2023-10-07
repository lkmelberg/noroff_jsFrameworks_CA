import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./render/Home";
import { Contact } from "./render/Contact";
import { Cart } from "./render/Cart";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
