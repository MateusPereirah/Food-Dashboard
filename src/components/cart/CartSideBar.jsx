import { FaTimes } from "react-icons/fa";
import Button from "../button/Button";
import { useCart } from "../../contexts/CartContext";
import CartItem from "./CartItem";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { div } from "motion/react-client";

const CartSideBar = ({ isCartOpen, toggleCart }) => {
  const { cartItems, totalAmount } = useCart();
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      className={`fixed right-0 top-0 z-20 h-screen w-[400px] transform transition-transform duration-300 ease-in-out ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex h-screen flex-col bg-white shadow-lg dark:bg-gray-900 dark:text-gray-200 rounded-bl-3xl rounded-tl-3xl">
        {/*Cart Header  */}
        <div className="flex justify-between items-center border-b border-gray-200 p-4 dark:border-gray-700">
          <h2>Your Cart</h2>
          <Button onClick={toggleCart} className="ml-auto">
            <FaTimes size={20} />
          </Button>
        </div>

        {/* Cart Content */}

        <div className="flex-1 p-3">
          {cartItems.length === 0 ? (
            <AnimatePresence initial={false}>
              <motion.div
                key="empty-cart" // Chave única para este estado
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center h-full"
              >
                <p className="text-gray-600 dark:text-gray-400">
                  Your Cart is Empty
                </p>
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="space-y-4">
              <AnimatePresence>
                {cartItems.map((item) =>
                  isVisible ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      key={item.name}
                    >
                      <CartItem item={item} />
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        <div className="overflow-hidden border-t border-gray-200 p-4 dark:border-gray-700">
          <p className="text-lg font-semibold flex items-center justify-between">
            Total Amount:{" "}
            <span className="font-bold text-lg">${totalAmount}</span>{" "}
          </p>
          <Button className="mt-5 w-full">Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default CartSideBar;
