import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.css";



const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    role: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Form data submitted:', formData);
  
      await fetch('http://localhost:8080/api/users',{
        body: JSON.stringify(formData),
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });



    } catch (error) {
      console.error('Error submitting form:', error);
  
    }
  };


  const handleReset = () => {
    setFormData({
      name: '',
      username: '',
      email: '',
      password: '',
      role: '',
    });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <table border="0">
            <tbody>
              <tr>
                <td colSpan="2">
                  <p className="header-text">Let's Get Started</p>
                  <p className="sub-text">Add Your Personal Details to Continue</p>
                </td>
              </tr>
              <tr>
                <td className="label-td" colSpan="2">
                  <label htmlFor="name" className="form-label">
                    Name:{' '}
                  </label>
                </td>
              </tr>
              <tr>
                <td className="label-td">
                  <input
                    type="text"
                    name="name"
                    className="input-text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </td>
                <td className="label-td">
                  <input
                    type="text"
                    name="username"
                    className="input-text"
                    placeholder="User Name"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td className="label-td" colSpan="2">
                  <label htmlFor="email" className="form-label">
                    Email:{' '}
                  </label>
                </td>
              </tr>
              <tr>
                <td className="label-td" colSpan="2">
                  <input
                    type="email"
                    name="email"
                    className="input-text"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td className="label-td" colSpan="2">
                  <label htmlFor="password" className="form-label">
                    Password:{' '}
                  </label>
                </td>
              </tr>
              <tr>
                <td className="label-td" colSpan="2">
                  <input
                    type="text"
                    name="password"
                    className="input-text"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td className="label-td" colSpan="2">
                  <label htmlFor="role" className="form-label">
                    Role:{' '}
                  </label>
                </td>
              </tr>
              <tr>
                <td className="label-td" colSpan="2">
                  <input
                    type="text"
                    name="role"
                    className="input-text"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td className="label-td" colSpan="2"></td>
              </tr>
              <tr>
                <td>
                  <input
                    type="reset"
                    value="Reset"
                    className="login-btn btn-primary-soft btn"
                    onClick={handleReset}
                  />
                </td>
                <td>
                  <input type="submit" value="Next" className="login-btn btn-primary btn" />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <br />
                  <label htmlFor="" className="sub-text" style={{ fontWeight: '280' }}>
                    Already have an account?{' '}
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

export default SignUp;
