import { useState } from "react";
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/Header";
import CartSideBar from "./components/cart/CartSideBar";
import Main from "./components/main/main";
import CartProvider from "./contexts/CartContext";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isSideOpen, setIsSideOpen] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  //darkMode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  //sideBar
  const toggleSidebar = () => {
    setIsSideOpen(!isSideOpen);
  };

  //cart
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartProvider>
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className="flex bg-white transition-all duration-300 ease-in-out dark:bg-gray-950 h-full">
          {/* {SIDEBAR} */}
          <Sidebar isOpen={isSideOpen} toggleSidebar={toggleSidebar} />

          {/* {Content} */}
          <div
            className={`${
              isSideOpen ? "ml-44" : "ml-16"
            } flex-1 transition-all duration-500 ease-in-out dark:text-white`}
          >
            {/* {HEADER} */}
            <Header
              toggleSideBar={toggleSidebar}
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              isCartOpen={isCartOpen}
              toggleCart={toggleCart}
            />

            {/* {MAIN} */}
            <Main />

            {/* {CARTSIDEBAR} */}
            <CartSideBar isCartOpen={isCartOpen} toggleCart={toggleCart} />
          </div>
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
