import { createContext, useContext, useState } from "react";

// Create the context
const CartContext = createContext();

// Custom hook to use the Cart Context
export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // add item to cart
  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.name === item.name);

      if (existingItem) {
        return prevItems.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // remove item from the cart

  const removeItemFromCart = (itemName) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.name !== itemName)
    );
  };

  // decrease item quantity it remove item
  const decreaseItemQuantity = (itemName) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) => {
          if (item.name == itemName) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              removeItemFromCart(itemName);
              return null;
            }
          }
          return item;
        })
        .filter((item) => item !== null);
    });
  };

  // calculate the total amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.quantity * item.amount,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalAmount,
        addItemToCart,
        decreaseItemQuantity,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
