import {useEffect, useState} from "react";
import { Route, Routes} from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop/scrollToTop";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import ContactPage from './pages/Contacto'
import ServicesPage from './pages/Servicios'
import AboutUs from './pages/AboutUs'
import Policy from './pages/Policy';
import OurServices from './pages/OurServices';
import TermsConditions from './pages/TermsConditions'
import ShoppingCart from './pages/Shopping Car';
import ShoppingAddress from './pages/ShippingAddressForm';
import Payment from './pages/Payment'
import ProductList from './pages/CategoryPage'
import Product from './pages/Product';
import Administration from './pages/Administration';
import SuccessfulProduct from './pages/Succesful/Admin';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  //Token
  useEffect(() => {
    const requestOptions = {
    method: "GET",
    redirect: "follow",
    };
      
    fetch("https://open-backend-beryl.vercel.app/", requestOptions)
    .then((response) => response.json())
    .then((data) => {
    const access_token = data.access_token;
    if (access_token) {
    localStorage.setItem("TokenProducts", access_token);
    } else {
    console.log("Access token not found in the response.");
    }
    });
    }, []);
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contactPage" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/ourServices" element={<OurServices />} />
        <Route path="/termsConditions" element={<TermsConditions />} />
        <Route path="/product/category/:category" element={<ProductList/>} />
        <Route path="/product/:productPartNum" element={<Product />} />
        <Route path="/product/category/:category/product/:productPartNum" element={<Product />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="/shoppingAddress" element={<ShoppingAddress />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/administration" element={<Administration />} />
        <Route path="/successful-product" element={<SuccessfulProduct />} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
