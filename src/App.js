import React from "react";
import Burmalinklogo from "./images/Burmalink-logo.png";
import Signinpic from "./images/SignIn.svg";

function App() {
  return (
    <div className="body-div">
      <section className="col-1">
        <div className="heading">
          <img id="logo" src={Burmalinklogo} alt="Logo" />
          <h1 className="title">Burma Link Channel</h1>
        </div>
        <img id="signInPic" src={Signinpic} alt="sign-in Pic" />
      </section>
      <section className="col-2">
        <div className="loginContainer">
          <h2 className="title2">Admin Sign In</h2>
          <form className="login-form">
            <div>
              <label className="label">Email:</label>
              <input className="input" type="email" />
            </div>
            <div>
              <label className="label">Password:</label>
              <input className="input" type="password" />
            </div>
            <div className="checkBoxLabel">
              <label className="checkBoxLabel">
                <input type="checkbox" className="checkBox" />
                Remember Me
              </label>
            </div>
            <input className="signInButton" type="submit" value="Sign in" />
          </form>
          <button className="forgetPwd" type="button">
            Forget Password
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
