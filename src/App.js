import React from "react";

// Components
import Header from "./Components/Header/Header.tsx";
import Footer from "./Components/Footer/Footer.tsx";

// Routing
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home.tsx";
import DetailPage from "./Pages/DetailPage.tsx";
import Products from "./Pages/Products.tsx";
import SignInPage from "./Pages/SignInPage.tsx";
import SignUpPage from "./Pages/SignUpPage.tsx";
import ForgetPassword from "./Pages/ForgetPasswordPage.tsx";
import ResetPasswordPage from "./Pages/ResetPasswordPage.tsx";
import ProfilePage from "./Pages/ProfilePage.tsx";
import ProfileAccountDetailPage from "./Pages/ProfileAccountDetailPage.tsx";
import ProfileOrdersPage from "./Pages/ProfileOrdersPage.tsx";
import ProfilePasswordPage from "./Pages/ProfilePasswordPage.tsx";
import ProfileAddressPage from "./Pages/ProfileAddressPage.tsx";
import ProfileWishlistPage from "./Pages/ProfileWishlistPage.tsx";
import Layout from "./Pages/Layout.tsx";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
        <Route path="forget-password" element={<ForgetPassword />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<DetailPage />} />
        <Route path="myaccount" element={<Layout />}>
          <Route path="password" element={<ProfilePasswordPage />} />
          <Route path="address" element={<ProfileAddressPage />} />
          <Route path="wishlist" element={<ProfileWishlistPage />} />
          <Route path="orders" element={<ProfileOrdersPage />} />
          <Route path="account-detail" element={<ProfileAccountDetailPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
