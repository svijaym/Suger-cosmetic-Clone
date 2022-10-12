import React from "react";
import { Routes, Route } from "react-router-dom";
import Account from "../Components/Account";
import Cart from "../Components/Cart";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Loginb from "../Components/Loginb";
import Offers from "../Components/Offers";
import Signup from "../Components/Signup";
import Wishlist from "../Components/Wishlist";
import Makeup from "../Components/Makeup";
import Brushes from "../Components/Brushes";
import Skincare from "../Components/Skincare";
import Pagenotfound from "../Components/Pagenotfound";
import PrivateRoute from "./PrivateRoute";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginb" element={<Loginb />} />
        <Route
          path="/acount"
          element={
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          }
        />
        <Route path="/offers" element={<Offers />} />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
        <Route path="/makeup" element={<Makeup />} />
        <Route path="/brushes" element={<Brushes />} />
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
