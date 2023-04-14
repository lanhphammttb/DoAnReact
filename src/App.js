import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import OurStore from "./views/OurStore";
import Blog from "./views/Blog";
import CompareProduct from "./views/CompareProduct";
import Wishlist from "./views/Wishlist";
import Login from "./views/Login";
import Forgotpassword from "./views/Forgotpassword";
import Signup from "./views/Signup";
import Resetpassword from "./views/Resetpassword";
import SingleBlog from "./views/SingleBlog";
import PrivacyPolicy from "./views/PrivacyPolicy";
import RefundPloicy from "./views/RefundPloicy";
import ShippingPolicy from "./views/ShippingPolicy";
import TermAndContions from "./views/TermAndContions";
import SingleProduct from "./views/SingleProduct";
import Cart from "./views/Cart";
import Checkout from "./views/Checkout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<OurStore />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<Forgotpassword />} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset-password" element={<Resetpassword />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPloicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="term-conditions" element={<TermAndContions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
