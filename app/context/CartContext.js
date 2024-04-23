"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  ///
  const isInCart = (slug) => {
    return cart.some((item) => item.id === slug);
  };

  const totalQty = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const emptyCart = () => {
    setCart([]);
  };
  const removeItem = (slug) => {
    setCart(cart.filter((item) => item.id !== slug));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        isInCart,
        removeItem,
        totalQty,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
