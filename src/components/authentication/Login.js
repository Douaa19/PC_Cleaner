import React from "react";

function Login() {
  return (
    <div>
      <h2>Sign in</h2>
      <div className="formgroupe">
        <form action="" method="post">
          <div className="email">
            <input type="email" name="" id="" placeholder="Email" />
          </div>
          <div className="password">
            <input type="password" name="" id="" placeholder="Password" />
          </div>
          <div className="button">
              <button type="submit">SIGN IN</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
