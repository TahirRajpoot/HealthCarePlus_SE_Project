import React, { useState } from "react";
import axios from "axios";
import Button from "../../../Global/components/Button/Button";
import Input from "../../../Global/components/Input/Input";
import Label from "../../../Global/components/Label/Label";
import LoginLayout from "../../../Global/components/LoginLayout/LoginLayout";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    useremail: "",
    userpassword: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/user/login",
        {
          email: formData.useremail,
          password: formData.userpassword,
        }
      );
      alert("User Login successfully:", data);
      navigate("/user_dashboard");
    } catch (err) {
      const errorMessage =
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message;
      setErrors({ registration: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <LoginLayout>
      <div className="form-container">
        <h2 className="title">Client Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <Label htmlFor="useremail">Email</Label>
            <Input
              fluid
              type="email"
              value={formData.useremail}
              name="useremail"
              onChange={handleChange}
            />
            {errors.useremail && (
              <div className="error" role="alert">
                {errors.useremail.message}
              </div>
            )}
          </div>
          <div className="input-group">
            <Label htmlFor="userpassword">Password</Label>
            <Input
              fluid
              type="password"
              id="userpassword"
              value={formData.userpsssword}
              name="userpassword"
              onChange={handleChange}
            />
            {errors.userpassword && (
              <div className="error" role="alert">
                {errors.userpassword.message}
              </div>
            )}
          </div>
          <br />
          <Button
            className="submit-button"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </form>
      </div>
    </LoginLayout>
  );
};

export default Login;
