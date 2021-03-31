import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";

const NavigationBar = props => {
  return (
    <nav className="nav-bar">
      <div className="navbar-center">
        <Link to="/">
          <button className="navigation-btn">
            <i className="fas fa-location-arrow"></i>
          </button>
        </Link>
        <img className="imgs" src={logo} alt="img" />
        <div className="checkout">
          <Link to="/checkout">
            <button className="checkout-btn">
              <i className="fas fa-shopping-cart"></i>
            </button>
          </Link>
          <Link to="/">
            <button className="logout-btn" onClick={props.Logout}>
              <i class="fas fa-sign-out-alt"></i>
            </button>
          </Link>
          <div className="cart-items">0</div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
