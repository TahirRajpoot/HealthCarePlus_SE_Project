import React, { useState } from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';

const Login = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userpassword, setUserPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('http://localhost:8080/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userEmail, userpassword }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          // Redirect or handle successful login
          console.log('Login successful:', data.user);
        } else {
          setError(data.error);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <p className="header-text">Welcome Back!</p>
        <p className="sub-text">Login with your details to continue</p>

        <div className="label-td">
          <label htmlFor="useremail" className="form-label">
            Email:
          </label>
          <input
            type="email"
            name="useremail"
            className="input-text"
            placeholder="Email Address"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
        </div>

        <div className="label-td">
          <label htmlFor="userpassword" className="form-label">
            Password:
          </label>
          <input
            type="password"
            name="userpassword"
            className="input-text"
            placeholder="Password"
            value={userpassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <br />
          {error && <p>{error}</p>}
        </div>

        <div>
          <input type="submit" value="Login" className="login-btn btn-primary btn" />
        </div>

        <div>
          <br />
          <label htmlFor="" className="sub-text" style={{ fontWeight: 280 }}>
            Don't have an account?{' '}
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
