import React, { Component } from "react";
import fire from "../config/fire";

class Login extends Component {
  signIn() {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  signUp() {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <div>
          <input id="email" placeholder="E-mail address" type="email"></input>
        </div>
        <div>
          <input id="password" placeholder="password" type="password"></input>
        </div>

        <button onClick={this.signIn}>LOGIN</button>
        <button onClick={this.signUp}>SIGN UP</button>
      </div>
    );
  }
}

export default Login;
