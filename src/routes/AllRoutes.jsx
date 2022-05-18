import { Routes, Route } from "react-router";
import { useState } from "react";
import {useNavigate, Navigate} from "react-router-dom"
import SignIn from "../components/Auhentication/SignIn";
import SignUp from "../components/Auhentication/SignUp";
import { CartPage } from "../components/Cart/CartPage";
import Electronics from "../components/Categories/Electronics";
import Furniture from "../components/Categories/Furniture";
import Checkout from "../components/CheckoutPage/Checkout";
import Footer from "../components/HomePage/Footer";
import LandingPage from "../components/HomePage/LandingPage";
import NavBar from "../components/HomePage/NavBar";
import ElectronicsProductPage from "../components/ProductPage/ElectronicsProductPage";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/users/action";

const AllRoutes = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  return (
    <>
      <NavBar logout={() => {setUser(false);dispatch(loginUser([]));}} />
      <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route
              exact
              path="/category/electronics"
              element={<Electronics />}
            />
            <Route
              exact
              path="/category/electronics/:id"
              element={<ElectronicsProductPage />}
            />
            <Route exact path="/category/furniture" element={<Furniture />} />
            <Route exact path="/cart" element={<CartPage />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route
              exact
              path="/signin"
              element={<SignIn authenticate={() => setUser(true)} />}
            />
      
     
        {user && (
          <>
            <Route exact path="/checkout" element={<Checkout />} />
          </>
        )}
         <Route exact path="*" element={<Navigate to={user ? "/" : "/signin"} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
