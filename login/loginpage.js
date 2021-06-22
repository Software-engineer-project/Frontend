import React, { useRef } from "react";
import handleLogin from "./handlelogin";

export default function LoginPage() {
  const email = useRef();
  const password = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await handleLogin({
      email: email.value,
      password: password.value,
    });
    window.localStorage.setItem("loginToken", token);
    console.log(token);
  };

  return (
    <div className="login_page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email:</p>
          <input ref={email} type="text" placeholder="Your email" />
        </label>
        <label>
          <p>Password:</p>
          <input ref={password} type="password" />
        </label>
        <button>Login</button>
      </form>
    </div>
  );
}
