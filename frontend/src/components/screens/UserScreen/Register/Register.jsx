import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../../../Global/components/Button/Button";
import Input from "../../../Global/components/Input/Input";
import Label from "../../../Global/components/Label/Label";
import LoginLayout from "../../../Global/components/LoginLayout/LoginLayout";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    useremail: "",
    userDateOfBirth: "",
    userpassword: "",
    userprimarycontact: "",
  });
  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

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
      const data = await axios.post("http://localhost:8080/api/user/register", {
        name: formData.username,
        email: formData.useremail,
        dob: formData.userDateOfBirth,
        contacts: formData.userprimarycontact,
        password: formData.userpassword,
      });
      alert("User registered successfully:");
      console.log(data);
      navigate("/user_login");
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
      <div className="FormContainer">
        <h2 className="Title">Client Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="InputGroup">
            <Label htmlFor="username">Name</Label>
            <Input
              fluid
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <div className="Error" role="alert">
                {errors.username.message}
              </div>
            )}
          </div>
          <div className="InputGroup">
            <Label htmlFor="useremail">Email</Label>
            <Input
              fluid
              type="email"
              id="useremail"
              name="useremail"
              value={formData.useremail}
              onChange={handleChange}
            />
            {errors.useremail && (
              <div className="Error" role="alert">
                {errors.useremail.message}
              </div>
            )}
          </div>
          <div className="TwoColumnGroups">
            <div className="InputGroup">
              <Label htmlFor="userprimarycontact">Primary Contact</Label>
              <Input
                fluid
                type="number"
                id="userprimarycontact"
                name="userprimarycontact"
                value={formData.userprimarycontact}
                onChange={handleChange}
              />
              {errors.userprimarycontact && (
                <div className="Error" role="alert">
                  {errors.userprimarycontact.message}
                </div>
              )}
            </div>
            <div className="InputGroup">
              <Label htmlFor="userDateOfBirth">Date Of Birth</Label>
              <Input
                fluid
                type="date"
                id="userDateOfBirth"
                name="userDateOfBirth"
                value={formData.userDateOfBirth}
                onChange={handleChange}
              />
              {errors.userDateOfBirth && (
                <div className="Error" role="alert">
                  {errors.userDateOfBirth.message}
                </div>
              )}
            </div>
          </div>
          <div className="InputGroup">
            <Label htmlFor="userpassword">Password</Label>
            <Input
              fluid
              type="password"
              id="userpassword"
              name="userpassword"
              value={formData.userpassword}
              onChange={handleChange}
            />
            {errors.userpassword && (
              <div className="Error" role="alert">
                {errors.userpassword.message}
              </div>
            )}
          </div>
          <Button
            className="SubmitButton"
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

export default Register;
