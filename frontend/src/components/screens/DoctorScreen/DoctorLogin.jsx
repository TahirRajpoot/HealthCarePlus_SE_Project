import React, { useState } from "react";
import Button from "../../../components/Global/components/Button/Button";
import Input from "../../../components/Global/components/Input/Input";
import Label from "../../../components/Global/components/Label/Label";
import LoginLayout from "../../../components/Global/components/LoginLayout/LoginLayout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DoctorLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    doctoremail: "",
    doctorpassword: "",
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
        "http://localhost:8080/api/doctor/doctorLogin",
        {
          email: formData.doctoremail,
          password: formData.doctorpassword,
        }
      );
      alert("Doctor Login successfully:");
      console.log(data);
      navigate("/doctor_dashboard");
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
        <h2 className="title">Doctor Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <Label htmlFor="doctoremail">Email</Label>
            <Input
              fluid
              type="email"
              error={errors.doctoremail ? true : false}
              id="doctoremail"
              name="doctoremail"
              onChange={handleChange}
              value={formData.doctoremail}
            />
            {errors.doctoremail && (
              <div className="error" role="alert">
                {errors.doctoremail.message}
              </div>
            )}
          </div>
          <div className="input-group">
            <Label htmlFor="doctorpassword">Password</Label>
            <Input
              fluid
              type="password"
              id="doctorpassword"
              value={formData.doctorpassword}
              onChange={handleChange}
              name="doctorpassword"
            />
            {errors.doctorpassword && (
              <div className="error" role="alert">
                {errors.doctorpassword.message}
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

export default DoctorLogin;
