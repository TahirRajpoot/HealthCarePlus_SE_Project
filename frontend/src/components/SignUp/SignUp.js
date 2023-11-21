import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.css";


const SignUp = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    address: '',
    nic: '',
    dob: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form data submitted:', formData);
  };

  const handleReset = () => {
    setFormData({
      fname: '',
      lname: '',
      address: '',
      nic: '',
      dob: '',
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
                    name="fname"
                    className="input-text"
                    placeholder="First Name"
                    value={formData.fname}
                    onChange={handleChange}
                    required
                  />
                </td>
                <td className="label-td">
                  <input
                    type="text"
                    name="lname"
                    className="input-text"
                    placeholder="Last Name"
                    value={formData.lname}
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
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td className="label-td" colSpan="2">
                  <label htmlFor="nic" className="form-label">
                    NIC:{' '}
                  </label>
                </td>
              </tr>
              <tr>
                <td className="label-td" colSpan="2">
                  <input
                    type="text"
                    name="nic"
                    className="input-text"
                    placeholder="NIC Number"
                    value={formData.nic}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td className="label-td" colSpan="2">
                  <label htmlFor="dob" className="form-label">
                    Date of Birth:{' '}
                  </label>
                </td>
              </tr>
              <tr>
                <td className="label-td" colSpan="2">
                  <input
                    type="date"
                    name="dob"
                    className="input-text"
                    value={formData.dob}
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
                  <Link to="/" className="hover-link1 non-style-link">
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
