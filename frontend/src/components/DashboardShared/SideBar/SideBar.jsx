import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "../../../colors";
import { useParams } from "react-router";

import LogoutIcon from "../../../assets/images/logout.svg";
import { useNavigate } from "react-router";

const StyledNavLink = styled(NavLink)`
  display: flex;
  gap: 12px;
  padding: 18px 30px 18px 0px;
  align-items: center;
  &.active {
    border-left: 7px solid ${colors.secondary};
    background: linear-gradient(
      90deg,
      rgba(77, 173, 189, 0.16) 0%,
      rgba(173, 217, 225, 0.08) 52.08%,
      rgba(173, 217, 225, 0.0733333) 54.17%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  &.active > div {
    margin-left: 13px;
  }
`;

const ImageContainer = styled.div`
  margin-left: 20px;
`;
const SPAN = styled.span`
  color: ${colors.primary};
`;

const SidebarContainer = styled.div`
  max-height: 100vh;
  position: sticky;
  top: 0;
`;

function SideBar({ sidebarData }) {
  const history = useNavigate();
  const params = useParams();

  const handleLogout = () => {
    if (params.id) {
      // Replace the following conditions with your logic for different user types
      if (params.id.startsWith("hospital")) {
        // Handle hospital logout
        console.log("Hospital Logout");
      } else {
        // Handle user logout
        console.log("User Logout");
      }
    }

    // Redirect to login_options after logout
    history("/login_options");
  };

  return (
    <SidebarContainer>
      {sidebarData
        ? sidebarData.map((data) => (
            <StyledNavLink to={data.route} key={data.id} exact>
              <ImageContainer>
                <img src={data.icon} alt={data.title} />
              </ImageContainer>
              <SPAN>{data.title}</SPAN>
            </StyledNavLink>
          ))
        : null}
      <StyledNavLink to="/login_options" onClick={handleLogout}>
        <ImageContainer>
          <img src={LogoutIcon} alt={"Logout"} />
        </ImageContainer>
        <SPAN>Logout</SPAN>
      </StyledNavLink>
    </SidebarContainer>
  );
}

export default SideBar;
