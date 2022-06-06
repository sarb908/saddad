import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = (props) => {
  // Note: this id should come from api
  const { cartdata, remover, addedCart } = useContext(CartContext);

  const [cartItem, setCartItem] = useState(null);

  const [added, setadded] = useState(false);

  // const [count, setCount] = useState(cartItem.count || "");

  const product = { id: props.id };

  useEffect(() => {
    const item = cartdata.find((item) => item.productId === props.id);

    console.log("use", cartdata);
    if (item) {
      setadded(true);
      setCartItem(item);
    } else {
      setadded(false);
      setCartItem([]);
    }
  }, [cartdata]);

  console.log(added);
  console.log(cartdata, props.id);

  return (
    <div
      data-cy={`product-${product.id}`}
      style={{
        padding: "15px",
        boxShadow:
          "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
      }}
    >
      <h3 data-cy="product-name">{props.name}</h3>
      <h6 data-cy="product-description">{props.description}</h6>
      {!added && (
        <button
          data-cy="product-add-item-to-cart-button"
          onClick={() => addedCart(props.id)}
        >
          Add to cart
        </button>
      )}
      {added && (
        <div>
          <button data-cy="product-increment-cart-item-count-button">+</button>
          <span data-cy="product-count">
            {
              // Count here from CartItems
              cartItem.count
            }
          </span>
          <button data-cy="product-decrement-cart-item-count-button">-</button>
          <button
            data-cy="product-remove-cart-item-button"
            onClick={() => remover(cartItem.id)}
          >
            remove from cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
