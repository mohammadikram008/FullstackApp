import React, { Fragment, useState } from "react";

const SignUp = () => {
  const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    handleSubmit = (e) => {
      e.preventDefault();
      console.log("name:", name, "email:", email, "password:", password);
    };
  return (
    <Fragment>
      <form className="register" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <input
          className="inputbox"
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="inputbox"
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="inputbox"
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="appbtn" type="submit">
          Save
        </button>
      </form>
    </Fragment>
  );
};

export default SignUp;
