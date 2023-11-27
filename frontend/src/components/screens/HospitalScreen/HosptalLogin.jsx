import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Global/components/Button/Button";
import Input from "../../../components/Global/components/Input/Input";
import Label from "../../../components/Global/components/Label/Label";
import LoginLayout from "../../../components/Global/components/LoginLayout/LoginLayout";

const HospitalLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    hospitalemail: "",
    hospitalpassword: "",
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
        "http://localhost:8080/api/hospitals/loginHospital",
        {
          email: formData.hospitalemail,
          password: formData.hospitalpassword,
        }
      );
      console.log("Hospital registered successfully:", data);
      navigate("/hospital_dashboard");
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
        <h2 className="title">Hospital Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <Label htmlFor="hospitalemail">Email</Label>
            <Input
              fluid
              type="email"
              value={formData.hospitalemail}
              onChange={handleChange}
              id="hospitalemail"
              name="hospitalemail"
            />
            {errors.hospitalemail && (
              <div className="error" role="alert">
                {errors.hospitalemail}
              </div>
            )}
          </div>
          <div className="input-group">
            <Label htmlFor="hospitalpassword">Password</Label>
            <Input
              fluid
              type="password"
              value={formData.hospitalpassword}
              onChange={handleChange}
              id="hospitalpassword"
              name="hospitalpassword"
            />
            {errors.hospitalpassword && (
              <div className="error" role="alert">
                {errors.hospitalpassword}
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

export default HospitalLogin;
