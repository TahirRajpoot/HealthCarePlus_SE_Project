import React from "react";
import "./Apps.css";
import { useSelector } from "react-redux";
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

const AppContainer = styled.div`
  max-width: 1800px;
  margin-right: auto;
`;

const App = () => {
  const userId = useSelector((state) => state.userLogin)?.userInfo?._id;
  const hospitalId = useSelector((state) => state.hospitalLogin)?.hospitalInfo
    ?._id;

  console.log(userId);

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
        </Routes>
      </Router>
    </AppContainer>
  );
};

export default App;
