import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Authentication from "../ReactHooks/JS/Authentication";
// import "./Login.css";

function Login() {
  const usernameref = useRef();
  const passwordref = useRef();
  const loginbtn = useRef();
  const [loginCred, setLoginCred] = useState({
    username: "",
    password: "",
  });
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const loginForm = (value) => {
    value.preventDefault();
    if (loginCred.username == "hari" && loginCred.password == "12345") {
      Authentication.setUserLoggedIn(loginCred.username);
      navigate(`/home/${loginCred.username}`);
    } else {
      setIsError(true);
    }
  };
  const onInputChange = (event) => {
    setLoginCred({
      ...loginCred,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="row mt-5 justify-content-center">
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <form onSubmit={loginForm}>
              <h3 className="text-center">login form</h3>
              <div className="mt-3">
                <input
                  type="text"
                  name="username"
                  placeholder="enter ur username"
                  className="form-control"
                  ref={usernameref}
                  value={loginCred.username}
                  onChange={onInputChange}
                  required
                ></input>
              </div>
              <div className="mt-3">
                <input
                  type="text"
                  name="password"
                  placeholder="enter ur password"
                  className="form-control"
                  ref={passwordref}
                  value={loginCred.password}
                  onChange={onInputChange}
                  required
                ></input>
              </div>
              <button
                type="submit"
                className="btn btn-primary mt-3 w-100"
                ref={loginbtn}
              >login</button>
              {isError && (
                <div className="alert alert-danger">
                  incorrect username/password
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
