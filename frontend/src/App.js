import React, { useState } from "react";
import "./Apps.css";
import HomeScreen from "./components/screens/HomeScreen/HomeScreen";
import About from "./components/screens/About/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Covid from "./components/screens/Covid/Covid";
import Doctor from "./components/screens/Doctor/Doctor";
import Register from "./components/screens/UserScreen/Register/Register";
import LoginOptions from "./components/screens/LoginOptions/LoginOptions";
import Login from "./components/screens/UserScreen/Login/Login";
import HospitalRegister from "./components/screens/HospitalScreen/HospitalRegister";
import HospitalLogin from "./components/screens/HospitalScreen/HosptalLogin";
import DoctorRegister from "./components/screens/DoctorScreen/DoctorRegister";
import DoctorLogin from "./components/screens/DoctorScreen/DoctorLogin";
import UserDashBoard from "./components/screens/UserDashBoard/UserDashBaord";
import ProtectedRoute from "./components/Global/components/ProtectedRoutes/ProtectRoute";

const AppContainer = styled.div`
  max-width: 1800px;
  margin-right: auto;
`;

const App = () => {
  const [userId, setUserId] = useState(null);
  const [hospitalId, setHospitalId] = useState(null);

  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<About />} />
          <Route path="/covid19" element={<Covid />} />
          <Route path="/doctors" element={<Doctor />} />
          <Route path="/login_options" element={<LoginOptions />} />
          <Route path="/user_register" element={<Register />} />
          <Route path="/user_login" element={<Login />} />
          <Route path="/hospital_register" element={<HospitalRegister />} />
          <Route path="/hospital_login" element={<HospitalLogin />} />
          <Route path="/doctor_register" element={<DoctorRegister />} />
          <Route path="/doctor_login" element={<DoctorLogin />} />
          <Route exact path="/user_dashboard" element={<UserDashBoard />} />
        </Routes>
      </Router>
    </AppContainer>
  );
};

export default App;
