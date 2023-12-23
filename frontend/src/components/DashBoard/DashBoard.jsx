import Header from "../DashboardShared/Header/Header";
import Sidebar from "../DashboardShared/SideBar/SideBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { currentUser, signInUser, isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem("token") != null &&
      localStorage.getItem("currentUser") != null
    ) {
      let user = JSON.parse(localStorage.getItem("currentUser"));
      let token = localStorage.getItem("token");
      signInUser(user, token);
    } else {
      navigate("/login");
    }
  }, [isLoggedIn]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        headerTitle="Dashboard"
      />
      <Sidebar
        open={open}
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Outlet />
    </Box>
  );
}
