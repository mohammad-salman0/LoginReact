import { useState } from "react";

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
      <button onClick={handleSubmit}> Login</button>
    </div>
  );
}
