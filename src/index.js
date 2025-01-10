import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

/* index.js */
import { BrowserRouter } from 'react-router-dom'; //사용을 위해 import 해주고

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header/>
    <Nav/>
    <App/>
    <Footer/>
  </BrowserRouter>
);