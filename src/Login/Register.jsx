import React, { useEffect, useRef, useState } from "react";
import "./Login.css";
function Register() {
  const [user, setuser] = useState({
    username: "",
    email: "",
    number: "",
    password: "",
    confirmpassword: "",
  });
  const [isRegister, setIsRegister] = useState(false);
  const regisertbtn = (event) => {
    event.preventDefault();
    console.log(user);
  };
  const onChangeUser = (event) => {
    setuser({ ...user, [event.target.name]: event.target.value });
  };
  return (
    <div className="login-container">
      <div className="left-section">
        {isRegister && (
          <form className="login-form">
            <h3>register form</h3>

            <input
              type="text"
              placeholder="username"
              className="form-control"
              name="username"
              value={user.username}
              onChange={onChangeUser}
            ></input>

            <input
              type="text"
              placeholder="email"
              className="form-control"
              name="email"
              value={user.email}
              onChange={onChangeUser}
            ></input>
            <input
              type="number"
              placeholder="mobile no"
              className="form-control"
              name="number"
              value={user.number}
              onChange={onChangeUser}
            ></input>
            <input
              type="text"
              placeholder="password"
              className="form-control"
              name="password"
              value={user.password}
              onChange={onChangeUser}
            ></input>
            <input
              type="text"
              placeholder="confirm password"
              className="form-control"
              name="confirmpassword"
              value={user.confirmpassword}
              onChange={onChangeUser}
            ></input>
            <button
              className="btn btn-primary mt-3 w-100"
              onClick={regisertbtn}
            >
              register
            </button>       
          </form>    
        )}    
      </div>
      {/* <div className="right-section">
        <h2>Welcome back!</h2>
        <p>
          Welcome back! We are so happy to have you here. It's great to see you
          again. We hope you had a safe and enjoyable time away.
        </p>
        <div>already have an account? Login</div>
      </div> */}
      {!isRegister && <Login />}
    </div>
  );
}
function Login() {
  const usernameref = useRef();
  const passwordref = useRef();
  const loginbtn = useRef();
  useEffect(() => {
    setTimeout(() => {
      loginbtn.current.click();
    }, 3000);
  });
  const loginForm = (value) => {
    value.preventDefault();
    usernameref.current.select();
    console.log(usernameref.current.value);
    console.log(passwordref.current.value);
  };
  return (
    <div className="signup-container">
      <div className="left-section">
      <h2>Welcome back!</h2>
        <p>
        Welcome back! We are so happy to have you here. It's great to see you
          again. We hope you had a safe and enjoyable time away.
        </p>
      </div>
      <div className="right-section">
        <form className="form">
          <h3>login form</h3>
          <input
            type="text"
            placeholder="enter ur username"
            className="form-control"
            ref={usernameref}
          ></input>

          <input
            type="text"
            placeholder="enter ur password"
            className="form-control"
            ref={passwordref}
          ></input>

          <button ref={loginbtn} onClick={loginForm}>
            login
          </button>
          
        </form>
      </div>
    </div>
  );
}

export default Register;
