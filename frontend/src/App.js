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
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

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
        </Routes>
      </Router>
    </AppContainer>
  );
};

export default App;
