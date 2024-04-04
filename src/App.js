import ReactDOM from "react-dom/client";

import { Button } from "react-bootstrap";

import "../node_modules/react-bootstrap/dist/react-bootstrap.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import { Header } from "./components/layout/Header.js";
import { Main } from "./components/layout/Main.js";
import { useState } from "react";
import { CartContextProvider } from "./context/CartContextProvider.js";

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const openCart = () => {
    setCartOpen(true);
  };
  const closeCart = () => {
    setCartOpen(false);
  };
  return (
    <>
      <CartContextProvider>
        <Header handlers={{ openCart }} />
        <Main handlers={{ closeCart }} show={cartOpen} />
      </CartContextProvider>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
