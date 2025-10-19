import React from "react";
import "./login.css";
function Login() {
  return (
    <div className="bgImg">
      <div className=" flex-r container pt-5">
        <div className="flex-r login-wrapper">
          <div className="login-text">
            <div className="logo d-flex justify-content-center">
              <a href="/">
                <img
                  src="/assets/images/images-removebg-preview.png"
                  width="70"
                  height="62"
                  alt="Cretech"
                />
              </a>
              <h4 className="mt-3 mx-2 text-light">Right Time User Login</h4>
            </div>
            <p className="text-light">Customer, Employee, Guest Login.</p>

            <form className="flex-c">
              <div className="input-box">
                <span className="label">Username</span>
                <div className=" flex-r input">
                  <input type="text" placeholder="user name" />
                  <i className="fas fa-user"></i>
                </div>
              </div>

              <div className="input-box">
                <span className="label">Password</span>
                <div className="flex-r input">
                  <input type="password" placeholder="8+ (a, A, 1, #)" />
                  <i className="fas fa-lock"></i>
                </div>
              </div>
              <button
                style={{ backgroundColor: "orange" }}
                className="btn  text-light w-100"
              >
                Login
              </button>
              <span className="extra-line">
                <span className="text-light">Forgot your password?</span>
              </span>
              <div className="d-flex px-5 mx-3 justify-content-center">
                <select className="p-2 rounded" style={{ width: "210px" }}>
                  <option value="1">Right Time Customer</option>
                  <option value="2">Right Time Empoyee</option>
                </select>
              </div>

              <span className="extra-line">
                <span className="text-light">Guest, Please Sign Up ,</span>
                <a href="#"> Login Here</a>
              </span>
            </form>
          </div>
        </div>
      </div>
      <br /> <br /> <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Login;
