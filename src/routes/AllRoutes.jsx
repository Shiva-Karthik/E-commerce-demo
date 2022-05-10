import { Routes, Route } from "react-router";
import Electronics from "../components/Categories/Electronics";
import Furniture from "../components/Categories/Furniture";
import Footer from "../components/HomePage/Footer";
import LandingPage from "../components/HomePage/LandingPage";
import NavBar from "../components/HomePage/NavBar";

const AllRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route exact path="/category/electronics" element={<Electronics/>}/>
          <Route exact path="/category/furniture" element={<Furniture/>}/>
          <Route/>
          <Route/>
          <Route/>
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
