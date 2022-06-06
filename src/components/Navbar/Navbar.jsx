import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
// use react-router Link or NavLink

const Navbar = () => {
  const { isAuth, logoutHandler } = useContext(AuthContext);
  const { cartdata } = useContext(CartContext);
  console.log(cartdata);
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/">
        {cartdata.length}
        Logo
      </Link>
      <span data-cy="navbar-cart-items-count">{}</span>
      <button
        data-cy="navbar-login-logout-button"
        onClick={() => {
          if (isAuth) {
            logoutHandler();
          }
        }}
      >
        {isAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
