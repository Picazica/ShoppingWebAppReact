import React from "react";

const Product = props => {
  const addToCart = e => {
    let identification = e.target.dataset.id;
    let exists = props.cart.some(item => {
      return item.id === identification;
    });
    exists
      ? props.setCart(
          props.cart.map(item => {
            if (item.id === identification) item.amount += 1;
            return item;
          })
        )
      : props.setCart([
          ...props.cart,
          {
            id: props.prod.id,
            img: props.prod.img,
            title: props.prod.title,
            price: props.prod.price,
            amount: 1,
          },
        ]);

    console.log(props.cart);
    if (!props.cartOpen) changestate();
  };

  const changestate = () => {
    props.setcartOpen(prev => !prev);
  };

  return (
    <article className="product">
      <div className="img-container">
        <li>
          <img className="product-img" src={props.prod.img} alt="imag" />
          <button
            className="bag-btn"
            data-id={props.prod.id}
            onClick={addToCart}
          >
            Add product
          </button>
          <h3>{props.prod.title}</h3>
          <h4>€{props.prod.price}</h4>
        </li>
      </div>
    </article>
  );
};

export default Product;
