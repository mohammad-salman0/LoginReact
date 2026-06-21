import { useState } from "react";
import axios from "axios";

export default function Login() {
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();

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
      })
      .catch((err) => {
        alert("wrong credentials entered");
        console.log("loggin falied", err);
      });
    console.log(payload);
  };
  return (
    <div>
      <p>Login Page</p>

      <p>Email:</p>
      <input
        type="email"
        value={email}
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <p>Password:</p>
      <input
        type="password"
        value={password}
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br></br>

      <button onClick={handleSubmit}> Login</button>
    </div>
  );
}
