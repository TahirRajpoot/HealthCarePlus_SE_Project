import React, { useState } from "react";
import "./HospitalRegister.css";
import Button from "../../../components/Global/components/Button/Button";
import Input from "../../../components/Global/components/Input/Input";
import Label from "../../../components/Global/components/Label/Label";
import LoginLayout from "../../../components/Global/components/LoginLayout/LoginLayout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HospitalRegister = () => {
  const navigate = useNavigate();

  // State to manage form data
  const [formData, setFormData] = useState({
    hospitalname: "",
    hospitalemail: "",
    hospitalprimarycontact: "",
    hospitalsecondarycontact: "",
    hospitalpassword: "",
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
      const { data } = await axios.post(
        "http://localhost:8080/api/hospitals/registerHospital",
        {
          name: formData.hospitalname,
          email: formData.hospitalemail,
          password: formData.hospitalpassword,
          contact1: formData.hospitalprimarycontact,
          contact2: formData.hospitalsecondarycontact,
        }
      );
      console.log("Hospital registered successfully:", data);
      navigate("/hospital_login");
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
        <h2 className="title">Hospital Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <Label htmlFor="hospitalname">Name</Label>
            <Input
              fluid
              type="text"
              value={formData.hospitalname}
              onChange={handleChange}
              name="hospitalname"
            />
            {errors.hospitalname && (
              <div className="error" role="alert">
                {errors.hospitalname}
              </div>
            )}
          </div>
          <div className="input-group">
            <Label htmlFor="hospitalemail">Email</Label>
            <Input
              fluid
              type="email"
              id="hospitalemail"
              value={formData.hospitalemail}
              onChange={handleChange}
              name="hospitalemail"
            />
            {errors.hospitalemail && (
              <div className="error" role="alert">
                {errors.hospitalemail}
              </div>
            )}
          </div>
          <div className="two-column-group">
            <div className="input-group">
              <Label htmlFor="hospitalprimarycontact">Primary Contact</Label>
              <Input
                fluid
                type="number"
                id="hospitalprimarycontact"
                value={formData.hospitalprimarycontact}
                onChange={handleChange}
                name="hospitalprimarycontact"
              />
              {errors.hospitalprimarycontact && (
                <div className="error" role="alert">
                  {errors.hospitalprimarycontact}
                </div>
              )}
            </div>
            <div className="input-group">
              <Label htmlFor="hospitalsecondarycontact">
                Secondary Contact
              </Label>
              <Input
                fluid
                type="number"
                id="hospitalsecondarycontact"
                value={formData.hospitalsecondarycontact}
                onChange={handleChange}
                name="hospitalsecondarycontact"
              />
              {errors.hospitalsecondarycontact && (
                <div className="error" role="alert">
                  {errors.hospitalsecondarycontact}
                </div>
              )}
            </div>
          </div>
          <div className="input-group">
            <Label htmlFor="hospitalpassword">Password</Label>
            <Input
              fluid
              type="password"
              id="hospitalpassword"
              value={formData.hospitalpassword}
              onChange={handleChange}
              name="hospitalpassword"
            />
            {errors.hospitalpassword && (
              <div className="error" role="alert">
                {errors.hospitalpassword.message}
              </div>
            )}
          </div>
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
export default HospitalRegister;
