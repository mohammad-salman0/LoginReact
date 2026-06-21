import { useState } from "react";
import axios from "axios";
import "./login.css";

export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let handleSubmit = () => {
    let payload = {
      email: email,
      password: password,
    };
    setEmail("");
    setPassword("");
    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", payload) // to log in enter
      .then((res) => {
        //email: john@mail.com
        alert("login success"); // password : changeme
        console.log("you logged in :", res);
        localStorage.setItem("token", JSON.stringify(res.data.access_token)); // storing the jwt token
      }) // returned by the api in local storage
      .catch((err) => {
        alert("wrong credentials entered");
        console.log("loggin falied", err);
      });
    console.log(payload);
  };

  return (
    <div className="login-page">
      <p className="login-title">Login Page</p>

      <div className="login-field">
        <label className="login-label">Email:</label>
        <input
          type="email"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        ></input>
      </div>

      <div className="login-field">
        <label className="login-label">Password:</label>
        <input
          type="password"
          value={password}
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        ></input>
      </div>

      <button onClick={handleSubmit} className="login-btn">
        Login
      </button>
    </div>
  );
}
