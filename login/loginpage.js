import React, { useRef } from "react";
import handleLogin from "./handlelogin";

export default function LoginPage() {
  const email = useRef();
  const password = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await handleLogin({
      email: email.current.value,
      password: password.current.value,
    });
    if (res.Token) {
      window.localStorage.setItem("loginToken", JSON.stringify(res));
      console.log("login");
    } else {
      console.log("failed");
      // TODO: Invalid login
    }
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
