import { useState } from "react";
import "./Login.css";
import { FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const [mode, setMode] = useState("login");
  const isLogin = mode === "login";
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-left">
          <div className="login-image-wrapper">
            <img
              className="login-image"
              src="https://images.pexels.com/photos/4144096/pexels-photo-4144096.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Students in a classroom"
            />
            <div className="login-image-overlay">
              <h2 className="login-image-title">It's time for <span style={{ color: "#49BBBD", fontWeight: "900" }}>LearNova</span></h2>
              <p className="login-image-subtitle">Start your journey with us</p>
            </div>
          </div>
        </div>
        <div className="login-right">
          <div className="login-header">
            <h2 className="login-welcome">
              Welcome to{" "}
              <span style={{ color: "#49BBBD", fontWeight: "900" }}>
                    LearNova
              </span>
            </h2>
            <div className="login-toggle">
              <button
                type="button"
                className={`toggle-btn ${isLogin ? "active" : ""}`}
                onClick={() => setMode("login")}
              >
                Login
              </button>
              <button
                type="button"
                className={`toggle-btn ${!isLogin ? "active" : ""}`}
                onClick={() => setMode("register")}
              >
                Register
              </button>
            </div>
          </div>

          <div className={`flip-container ${!isLogin ? "flipped" : ""}`}>
            <div className="flip-inner">
              <div className="flip-front">
                <p className="login-description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <form className="login-form">
                  <div className="form-group">
                    <label className="login-label" htmlFor="username-login">
                      User name
                    </label>
                    <input
                      id="username-login"
                      type="text"
                      className="login-input"
                      placeholder="Enter your User name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="login-label" htmlFor="password-login">
                      Password
                    </label>
                    <div className="password-field">
                      <input
                        id="password-login"
                        type="password"
                        className="password-input"
                        placeholder="Enter your Password"
                      />
                      <span className="password-icon" aria-hidden="true">
                        <FaRegEyeSlash />
                      </span>
                    </div>
                  </div>

                  <div className="login-options">
                    <label className="remember-me">
                      <input type="checkbox" />
                      <span>Remember me</span>
                    </label>
                    <button type="button" className="forgot-password">
                      Forgot Password ?
                    </button>
                  </div>

                  <button type="submit" className="login-submit">
                    Login
                  </button>
                </form>
              </div>

              {/* Register Side (Back) */}
              <div className="flip-back">
                <p className="login-description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <form className="login-form">
                  <div className="form-group">
                    <label className="login-label" htmlFor="email-register">
                      Email Address
                    </label>
                    <input
                      id="email-register"
                      type="email"
                      className="login-input"
                      placeholder="Enter your Email Address"
                    />
                  </div>

                  <div className="form-group">
                    <label className="login-label" htmlFor="username-register">
                      User name
                    </label>
                    <input
                      id="username-register"
                      type="text"
                      className="login-input"
                      placeholder="Enter your User name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="login-label" htmlFor="password-register">
                      Password
                    </label>
                    <div className="password-field">
                      <input
                        id="password-register"
                        type="password"
                        className="password-input"
                        placeholder="Enter your Password"
                      />
                      <span className="password-icon" aria-hidden="true">
                        <FaRegEyeSlash className="eye-icon" />
                      </span>
                    </div>
                  </div>

                  <button type="submit" className="login-submit">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
