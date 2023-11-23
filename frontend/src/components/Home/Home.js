import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="full-height">
      <center>
        <table border="0">
          <tbody>
            <tr>
              <td width="80%">
                <span className="edoc-logo">eDoc. </span>
                <span className="edoc-logo-sub">| THE ECHANNELING PROJECT</span>
              </td>
              <td width="10%">
                <Link to="/login" className="non-style-link">
                  <p className="nav-item">LOGIN</p>
                </Link>
              </td>
              <td width="10%">
                <Link to="/signup" className="non-style-link">
                  <p className="nav-item" style={{ paddingRight: "10px" }}>
                    REGISTER
                  </p>
                </Link>
              </td>
            </tr>

            <tr>
              <td colSpan="3">
                <p className="heading-text">Avoid Hassles & Delays.</p>
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <p className="sub-text2">
                  How is health today, Sounds like not good!
                  <br />
                  Don't worry. Find your doctor online Book as you wish with
                  eDoc. <br />
                  We offer you a free doctor channeling service, Make your
                  appointment now.
                </p>
              </td>
            </tr>
            <tr>
              <td colSpan="3"></td>
            </tr>
          </tbody>
        </table>
        <p className="sub-text2 footer-hashen">A Web Solution By Usman.</p>
      </center>
    </div>
  );
};

export default Home;
