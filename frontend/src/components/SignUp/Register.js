import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const BASE_API_URL = "http://localhost:8080";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Form data submitted:", formData);

      const response = await fetch(`${BASE_API_URL}/api/users`, {
        body: JSON.stringify(formData),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Error data:", errorData);
        setErrorMessage(
          errorData.message || "An error occurred during signup."
        );
        setSuccessMessage("");
      } else {
        setSuccessMessage("User registered successfully.");
        setErrorMessage("");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("An unexpected error occurred during signup.");
      setSuccessMessage("");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      username: "",
      email: "",
      password: "",
      role: "",
    });

    setSuccessMessage("");
    setErrorMessage("");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div className="signup-container">
        <form onSubmit={handleSubmit}>
          <table border="0">
            <tbody>
              <tr>
                <td className="signup-td" colSpan="2">
                  <p className="signup-header-text">Let's Get Started</p>
                  <p className="signup-sub-text">
                    Add Your Personal Details to Continue
                  </p>
                </td>
              </tr>
              <tr>
                <td className="signup-label-td" colSpan="2">
                  <label htmlFor="name" className="form-label">
                    Name:{" "}
                  </label>
                </td>
              </tr>
              <tr>
                <td className="signup-label-td">
                  <input
                    type="text"
                    name="name"
                    className="signup-input-text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </td>
                <td className="signup-label-td">
                  <input
                    type="text"
                    name="username"
                    className="signup-input-text"
                    placeholder="User Name"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td className="signup-label-td" colSpan="2">
                  <label htmlFor="email" className="form-label">
                    Email:{" "}
                  </label>
                </td>
              </tr>
              <tr>
                <td className="signup-label-td" colSpan="2">
                  <input
                    type="email"
                    name="email"
                    className="signup-input-text"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td className="signup-label-td" colSpan="2">
                  <label htmlFor="password" className="form-label">
                    Password:{" "}
                  </label>
                </td>
              </tr>
              <tr>
                <td className="signup-label-td" colSpan="2">
                  <input
                    type="text"
                    name="password"
                    className="signup-input-text"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>

              <tr>
                <td className="signup-label-td" colSpan="2">
                  <label htmlFor="role" className="signup-form-label">
                    Role:{" "}
                  </label>
                </td>
              </tr>
              <tr>
                <td className="signup-label-td" colSpan="2">
                  <input
                    type="text"
                    name="role"
                    className="signup-input-text"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td className="signup-label-td" colSpan="2"></td>
              </tr>
              <tr>
                <td className="signup-td">
                  <input
                    type="reset"
                    value="Reset"
                    className="login-btn btn-primary-soft btn"
                    onClick={handleReset}
                  />
                </td>
                <td className="signup-td">
                  <input
                    type="submit"
                    value="Next"
                    className="login-btn btn-primary btn"
                  />
                </td>
              </tr>
              <tr>
                <td className="signup-td" colSpan="2">
                  <br />
                  {errorMessage && (
                    <p className="errorMsg login-error">{errorMessage}</p>
                  )}
                  {successMessage && (
                    <p className="successMsg">{successMessage}</p>
                  )}
                  <label
                    htmlFor=""
                    className="signup-sub-text"
                    style={{ fontWeight: "280" }}
                  >
                    Already have an account?{" "}
                  </label>
                  <Link to="/login" className="hover-link1 non-style-link">
                    Login
                  </Link>
                  <br />
                  <br />
                  <br />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default Register;
