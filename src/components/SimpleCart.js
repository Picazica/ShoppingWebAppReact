import React from "react";
import { Link } from "react-router-dom";

const SimpleCart = props => {
  let total = 0;

  const changestate = () => {
    props.setcartOpen(prev => !prev);
  };

  const changeStatus = () => {
    props.setcartOpen(prev => !prev);
  };

  const moreAmount = e => {
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
        if (item.id === identification && item.amount >= 2) item.amount -= 1;
        return item;
      })
    );
  };

  const removeItem = e => {
    let identification = e.target.dataset.id;
    props.setCart(props.cart.filter(item => item.id !== identification));
  };

  const clearCart = () => {
    props.setCart([]);
  };
  return (
    <div className="cartOverlay-vitor">
      <div className="cart-vitor">
        <span className="close-cart-vitor">
          <button className="close-cart-vitor" onClick={changeStatus}>
            Close
          </button>
        </span>
        <h2>Your cart</h2>
        <div className="cart-content-vitor">
          <ul>
            {props.cart.map(item => {
              total += item.price * item.amount;

              return (
                <li>
                  <h2>{item.title}</h2>
                  <button onClick={removeItem} data-id={item.id}>
                    Remove item
                  </button>
                  <img src={item.img} alt="sim" className="img-vitor" />
                  <h2>{item.price}€</h2>
                  <span>remove</span>
                  <button onClick={moreAmount} data-id={item.id}>
                    up
                  </button>
                  <p>{item.amount}</p>
                  <button onClick={lessAmount} data-id={item.id}>
                    down
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3>
            Your total average: € <span>{parseFloat(total.toFixed(2))}</span>
          </h3>
          <Link to="/checkout">
            <button>Checkout</button>
          </Link>
          <button onClick={clearCart}>Clear grocery list</button>
          <button onClick={changestate}>Close Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SimpleCart;
