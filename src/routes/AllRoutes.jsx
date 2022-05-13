import { Routes, Route } from "react-router";
import { CartPage } from "../components/Cart/CartPage";
import Electronics from "../components/Categories/Electronics";
import Furniture from "../components/Categories/Furniture";
import Checkout from "../components/CheckoutPage/Checkout";
import Footer from "../components/HomePage/Footer";
import LandingPage from "../components/HomePage/LandingPage";
import NavBar from "../components/HomePage/NavBar";
import ElectronicsProductPage from "../components/ProductPage/ElectronicsProductPage";

const AllRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route exact path="/category/electronics" element={<Electronics/>}/>
          <Route exact path="/category/electronics/:id" element={<ElectronicsProductPage/>}/>
          <Route exact path="/category/furniture" element={<Furniture/>}/>
          <Route exact path="/cart" element={<CartPage/>}/>
          <Route exact path="/checkout" element={<Checkout/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
