import React, { useState } from "react";

const LoginForm = props => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = e => {
    e.preventDefault();
    props.Login(details);
  };

  const getName = e => {
    setDetails({ ...details, name: e.target.value });
  };

  const getEmail = e => {
    setDetails({ ...details, email: e.target.value });
  };

  const getPassword = e => {
    setDetails({ ...details, password: e.target.value });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={getName}
            value={details.name}
          />

          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={getEmail}
            value={details.email}
          />

          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={getPassword}
            value={details.password}
          />
        </div>
        <input type="submit" value="Login" />
      </div>
    </form>
  );
};

export default LoginForm;
