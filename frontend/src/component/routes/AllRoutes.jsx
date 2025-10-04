import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Contact from "../contact/Contact";
import AdminLogin from "../../pages/AdminLogin";
import AdminDashboard from "../../pages/AdminDashboard";

const AllRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<AdminLogin />} />
    <Route path="/admin" element={<AdminDashboard />} />
  </Routes>
);

export default AllRoutes;
