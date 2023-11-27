import React, { useState } from "react";
import Button from "../../Global/components/Button/Button";
import Input from "../../Global/components/Input/Input";
import Label from "../../Global/components/Label/Label";
import LoginLayout from "../../Global/components/LoginLayout/LoginLayout";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import axios from "axios";

const DoctorRegister = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setformData] = useState({
    doctorname: "",
    doctoremail: "",
    doctorspeciality: "",
    doctorprimarycontact: "",
    currentorganization: "",
    graduatedFrom: "",
    doctorpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        "http://localhost:8080/api/doctor/doctorRegister",
        {
          name: formData.doctorname,
          email: formData.doctoremail,
          speciality: formData.doctorspeciality,
          contact: formData.contact,
          organization: formData.organization,
          graduatedFrom: FormData.graduatedFrom,
          password: formData.doctorpassword,
        }
      );
      alert("Login Successfully:");
      console.log(data);
      navigate("/doctor_login");
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
        <h2 className="title">Doctor Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <Label htmlFor="doctorname">Name</Label>
            <Input
              fluid
              type="text"
              onChange={handleChange}
              value={formData.doctorname}
              name="doctorname"
            />
            {errors.doctorname && (
              <div className="error" role="alert">
                {errors.doctorname.message}
              </div>
            )}
          </div>
          <div className="input-group">
            <Label htmlFor="doctoremail">Email</Label>
            <Input
              fluid
              type="email"
              id="doctoremail"
              value={formData.doctoremail}
              onChange={handleChange}
              name="doctoremail"
            />
            {errors.doctoremail && (
              <div className="error" role="alert">
                {errors.doctoremail.message}
              </div>
            )}
          </div>
          <div className="two-column-group">
            <div className="input-group">
              <Label htmlFor="doctorspeciality">Speciality</Label>
              <Input
                fluid
                type="string"
                id="doctorspeciality"
                value={formData.doctorspeciality}
                onChange={handleChange}
                name="doctorspeciality"
              />
              {errors.doctorspeciality && (
                <div className="error" role="alert">
                  {errors.doctorspeciality.message}
                </div>
              )}
            </div>
            <div className="input-group">
              <Label htmlFor="doctorprimarycontact">Primary Contact</Label>
              <Input
                fluid
                type="number"
                id="doctorprimarycontact"
                value={formData.doctorprimarycontact}
                onChange={handleChange}
                name="doctorprimarycontact"
              />
              {errors.doctorprimarycontact && (
                <div className="error" role="alert">
                  {errors.doctorprimarycontact.message}
                </div>
              )}
            </div>
          </div>
          <div className="input-group">
            <Label htmlFor="currentorganization">Current Organization</Label>
            <Input
              fluid
              type="string"
              id="currentorganization"
              value={formData.currentorganization}
              onChange={handleChange}
              name="currentorganization"
            />
            {errors.currentorganization && (
              <div className="error" role="alert">
                {errors.currentorganization.message}
              </div>
            )}
          </div>
          <div className="input-group">
            <Label htmlFor="graduatedFrom">Graduated From</Label>
            <Input
              fluid
              type="string"
              id="graduatedFrom"
              onChange={handleChange}
              value={formData.graduatedFrom}
              name="graduatedFrom"
            />
            {errors.graduatedFrom && (
              <div className="error" role="alert">
                {errors.graduatedFrom.message}
              </div>
            )}
          </div>
          <div className="input-group">
            <Label htmlFor="doctorpassword">Password</Label>
            <Input
              fluid
              type="password"
              id="doctorpassword"
              onChange={handleChange}
              value={formData.doctorpassword}
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

export default DoctorRegister;
