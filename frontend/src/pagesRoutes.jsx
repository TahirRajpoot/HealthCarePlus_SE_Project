import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/DashBoard/DashBoard";
import { UserContext } from "./Context/UserContext";
import AdminDashboard from "./components/DashBoard/AdminDashBoard";
import UserList from "./components/screens/UserDashBoard/User/UserList";
import AddUser from "./components/screens/UserDashBoard/User/AddUser";
import EditUser from "./components/screens/UserDashBoard/User/EditUser";
import Login from "./components/screens/UserScreen/Login/Login";
import Register from "./components/screens/UserScreen/Register/Register";
import User from "./components/screens/UserDashBoard/User/User";
import AddPatient from "./components/screens/UserDashBoard/Patient/AddPatient";
import EditPatient from "./components/screens/UserDashBoard/Patient/EditPatient";
import PatientList from "./components/screens/UserDashBoard/Patient/PatientList";
import Adddoctor from "./components/screens/UserDashBoard/Doctor/AddDoctor";
import Editdoctor from "./components/screens/UserDashBoard/Doctor/EditDoctor";
import DoctorList from "./components/screens/UserDashBoard/Doctor/DoctorList";
import AdminProfile from "./components/screens/Profile/AdminProfile";
import PatientProfile from "./components/screens/Profile/PatientProfile";
import DoctorProfile from "./components/screens/Profile/DoctorProfile";
import NotFound from "./NotFound";
import Medicine from "./components/screens/UserDashBoard/Medicine/Medicine";
import Addmedicine from "./components/screens/UserDashBoard/Medicine/AddMedicine";
import Editmedicine from "./components/screens/UserDashBoard/Medicine/EditMedicine";
import MedicineList from "./components/screens/UserDashBoard/Medicine/MedicineList";
import Patient from "./components/screens/UserDashBoard/Patient/Patient";
import Doctor from "./components/screens/UserDashBoard/Doctor/Doctor";

function ProtectedAdminRoute({ children }) {
  const { currentUser } = useContext(UserContext);
  if (currentUser.userType == "Admin") {
    return children;
  }
}

function ProtectedStaffRoute({ children }) {
  const { currentUser } = useContext(UserContext);
  if (currentUser.userType == "Admin" || currentUser.userType == "Doctor") {
    return children;
  }
}

export default function PageRoutes() {
  const { currentUser } = useContext(UserContext);
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route
          index
          element={
            currentUser.userType == "Admin" ? <AdminDashboard /> : <div />
          }
        />
        <Route
          path="users"
          element={
            <ProtectedAdminRoute>
              {" "}
              <User />{" "}
            </ProtectedAdminRoute>
          }
        >
          <Route index element={<UserList />} />
          <Route path="add" element={<AddUser />} />
          <Route path="edit/:id" element={<EditUser />} />
        </Route>

        <Route
          path="patients"
          element={
            <ProtectedAdminRoute>
              {" "}
              <Patient />{" "}
            </ProtectedAdminRoute>
          }
        >
          <Route index element={<PatientList />} />
          <Route path="add" element={<AddPatient />} />
          <Route path="edit/:id" element={<EditPatient />} />
        </Route>

        <Route
          path="doctors"
          element={
            <ProtectedAdminRoute>
              {" "}
              <Doctor />{" "}
            </ProtectedAdminRoute>
          }
        >
          <Route index element={<DoctorList />} />
          <Route path="add" element={<Adddoctor />} />
          <Route path="edit/:id" element={<Editdoctor />} />
        </Route>

        <Route path="medicines" element={<Medicine />}>
          <Route
            index
            element={
              <ProtectedStaffRoute>
                {" "}
                <MedicineList />{" "}
              </ProtectedStaffRoute>
            }
          />
          <Route
            path="add"
            element={
              <ProtectedAdminRoute>
                {" "}
                <Addmedicine />{" "}
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="edit/:id"
            element={
              <ProtectedAdminRoute>
                {" "}
                <Editmedicine />
              </ProtectedAdminRoute>
            }
          />
        </Route>

        <Route
          path="profile"
          element={
            currentUser.userType == "Admin" ? (
              <AdminProfile />
            ) : currentUser.userType == "Doctor" ? (
              <DoctorProfile />
            ) : currentUser.userType == "Patient" ? (
              <PatientProfile />
            ) : (
              <div />
            )
          }
        />

        <Route path="/profile" element={<DoctorProfile />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
