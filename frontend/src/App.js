// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home/Home";
// import Login from "./components/Login/Login";
// import "../src/css/App.css";
// // import "../src/components/Login/Login.css";
// import Register from "./components/SignUp/Register";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" exact element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Register />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

import React from "react";
import "./Apps.css";
import { useSelector } from "react-redux";
import HomeScreen from "./components/screens/HomeScreen/HomeScreen";
import About from "./components/screens/About/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Covid from "./components/screens/Covid/Covid";
import Doctor from "./components/screens/Doctor/Doctor";
import LoginScreen from "./components/screens/UserScreen/Register/Register";
import LoginOptions from "./components/screens/LoginOptions/LoginOptions";

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
          <Route path="/user_register" element={<LoginScreen />} />
        </Routes>
      </Router>
    </AppContainer>
  );
};

export default App;
