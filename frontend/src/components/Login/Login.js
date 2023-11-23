import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const BASE_API_URL = "http://localhost:8080";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_API_URL}/api/login`, {
        body: JSON.stringify(formData),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Error data:", errorData);
        setErrorMessage(errorData.message || "An error occurred during Login.");
        setSuccessMessage("");
      } else {
        setSuccessMessage("User Login successfully.");
        setErrorMessage("");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("An unexpected error occurred during signup.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <p className="header-text">Welcome Back!</p>
        <p className="sub-text">Login with your details to continue</p>

        <div className="label-td">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            name="email"
            className="input-text"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="label-td">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            name="password"
            className="input-text"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* <div>
          <br />
          {error && <p>{error}</p>}
        </div> */}

        <div>
          <input
            type="submit"
            value="Login"
            className="login-btns btn-primary btn"
          />
        </div>

        <div>
          <br />
          {errorMessage && (
            <p className="errorMsg login-error">{errorMessage}</p>
          )}
          {successMessage && <p className="successMsg">{successMessage}</p>}

          <label htmlFor="" className="sub-text" style={{ fontWeight: 280 }}>
            Don't have an account?{" "}
          </label>
          <Link to="/signup" className="hover-link1 non-style-link">
            Sign Up
          </Link>
          <br />
          <br />
          <br />
        </div>
      </form>
    </div>
  );
};

export default Login;
