import React, { useState } from "react";

export const cartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const openCart = () => {
    setCartOpen(true);
  };
  const closeCart = () => {
    setCartOpen(false);
  };
  return (
    <cartContext.Provider
      value={{
        cartCount,
        setCartCount,
        cartItems,
        setCartItems,
        totalAmount,
        setTotalAmount,
        openCart,
        closeCart,
        cartOpen,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
