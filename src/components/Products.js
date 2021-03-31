import React from "react";
import Product from "./Product";

const Products = props => {
  return (
    <section className="products">
      <div className="products-center">
        <ul>
          {props.products.map(prod => {
            return (
              <Product
                cartOpen={props.cartOpen}
                setcartOpen={props.setcartOpen}
                prod={prod}
                setCart={props.setCart}
                cart={props.cart}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Products;
