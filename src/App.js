import React, { useState, useEffect } from "react";
import "./App.css";
import Products from "./components/Products";
import NavigationBar from "./components/NavigationBar";
import Checkout from "./components/Checkout";
import SimpleCart from "./components/SimpleCart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "1234",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(1);
  const [cartOpen, setcartOpen] = useState(false);

  const Login = details => {
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    )
      setUser({
        name: details.name,
        email: details.email,
      });
    else {
      alert("Details did not match!");
      setError("Details did not match");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  const getProducts = async () => {
    try {
      const result = await fetch("products.json");
      const data = await result.json();
      let products = data.items;
      products = products.map(item => {
        const { title, price } = item.fields;
        const id = item.sys.id;
        const img = item.fields.image.fields.file.url;
        return { title, price, id, img };
      });
      setProducts(products);
      console.log(products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      {user.email !== "" ? (
        <div className="farinha">
          <Router>
            <Switch>
              <Route path="/">
                <NavigationBar cart={cart} Logout={Logout} />
              </Route>
            </Switch>

            {cartOpen ? (
              <SimpleCart
                cart={cart}
                setCart={setCart}
                cartOpen={cartOpen}
                setcartOpen={setcartOpen}
              />
            ) : (
              ""
            )}
            <h1>GroceryList</h1>

            <Switch>
              <Route path="/checkout">
                <Checkout
                  cart={cart}
                  setCart={setCart}
                  amount={amount}
                  setAmount={setAmount}
                />
              </Route>
            </Switch>

            <Products
              cartOpen={cartOpen}
              setcartOpen={setcartOpen}
              products={products}
              setCart={setCart}
              cart={cart}
            />
          </Router>
        </div>
      ) : (
        <div className="farinha2">
          <LoginForm Login={Login} error={error} />
        </div>
      )}
    </div>
  );
}

export default App;
