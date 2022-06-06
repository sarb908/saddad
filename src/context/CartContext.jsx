import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartdata, setcartData] = useState();

  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/products").then((d) => {
      console.log(d.data);
      setdata(d.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/cartItems").then((d) => {
      console.log(d.data);
      setcartData(d.data);
    });
  }, []);

  const remover = (item) => {
    axios.delete(`http://localhost:8080/cartItems/${item}`);

    axios.get("http://localhost:8080/cartItems").then((d) => {
      console.log(d.data);
      setcartData(d.data);
    });
    axios.get("http://localhost:8080/products").then((d) => {
      console.log(d.data);
      setdata(d.data);
    });
  };

  const addedCart = (e) => {
    console.log(e);
    axios.post(`http://localhost:8080/cartItems`, {
      productId: e,
      count: 1,
    });
    axios.get("http://localhost:8080/cartItems").then((d) => {
      console.log(d.data);
      setcartData(d.data);
    });
    axios.get("http://localhost:8080/products").then((d) => {
      console.log(d.data);
      setdata(d.data);
    });
  };
  return (
    <CartContext.Provider value={{ cartdata, remover, addedCart, data }}>
      {children}
    </CartContext.Provider>
  );
};
