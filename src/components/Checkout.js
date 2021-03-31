import React from "react";
import { Link } from "react-router-dom";

const Checkout = props => {
  let total = 0;

  const removeItem = e => {
    let identification = e.target.dataset.id;
    props.setCart(props.cart.filter(item => item.id !== identification));
  };

  const addAmount = e => {
    let identification = e.target.dataset.id;
    props.setCart(
      props.cart.map(item => {
        if (item.id === identification) item.amount += 1;
        return item;
      })
    );
  };

  const lessAmount = e => {
    let identification = e.target.dataset.id;
    props.setCart(
      props.cart.map(item => {
        if (item.id === identification && item.amount >= 1) item.amount -= 1;
        return item;
      })
    );
    props.setCart(props.cart.filter(item => item.amount > 0));
  };

  const clear = () => {
    props.setCart([]);
  };

  return (
    <div className="cart-overlay">
      <div className="cart">
        <span className="close-cart">
          <Link to="/">
            <button className="close-cart">Close</button>
          </Link>
        </span>
        <h2>Your cart</h2>
        <div className="cart-content">
          <ul>
            {props.cart.map(item => {
              total += item.price * item.amount;
              return (
                <li>
                  <h2>{item.title}</h2>
                  <img className="vitor" src={item.img} alt="img" />
                  <h2>€{item.price}</h2>
                  <span
                    className="remove-item"
                    onClick={removeItem}
                    data-id={item.id}
                  >
                    remove
                  </span>
                  <button
                    className="windowUp"
                    onClick={addAmount}
                    data-id={item.id}
                  >
                    up
                  </button>
                  <p className="item-amount">{item.amount}</p>
                  <button
                    className="windowDown"
                    onClick={lessAmount}
                    data-id={item.id}
                  >
                    down
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="cart-footer">
          <h3>
            Your total average: €{" "}
            <span className="cart-total">{parseFloat(total.toFixed(2))}</span>
          </h3>
          <button className="clear-cart banner-btn" onClick={clear}>
            Clear grocery list
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
