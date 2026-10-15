import { Link, Routes, Route } from "react-router-dom";

import Profile from "../dashboard/Profile";
import Orders from "../dashboard/Orders";
import Settings from "../dashboard/Settings";

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>

      <Link to="profile">Profile</Link>
      <Link to="orders">Orders</Link>
      <Link to="settings">Settings</Link>

      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="orders" element={<Orders />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default Dashboard;