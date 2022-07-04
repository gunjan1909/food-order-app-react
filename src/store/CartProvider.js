// CartProvider component that wraps the entire app, passes props and makes the cartContext available to all child components along with displaying the props children

import React, { useReducer } from "react";

import CartContext from "./cart-context";

//simple default cart state
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

//reducer function
//state is last state snapshot, action is dispatched by us
const cartReducer = (state, action) => {
  //if we add to cart
  if (action.type === "ADD") {
    //old state amount + action(new item)amount*no.of items
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    //finding the index if the added item already exist
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    //if the item already exist, the existing item
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    //if the item already exist, update the amount
    if (existingCartItem) {
      //updateing the amount of already existing item
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      //updating the items array
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    //else just add the item to the items array
    else {
      //concat() instead of push() to return new array instead of changing the existing array in memory
      updatedItems = state.items.concat(action.item);
    }

    //return the new cart items and total amount
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

//component function
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
