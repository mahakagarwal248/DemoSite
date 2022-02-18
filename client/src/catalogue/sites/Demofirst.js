import React,{useEffect} from "react";
import Footer from "./Components/D1Components/Footer";
import MainPage from "./Components/D1Components/MainPage";
import Navbar from "./Components/D1Components/Navbar";

export const Demofirst = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="demo1">
      <Navbar/>
      <MainPage/>
      <Footer/>
    </div>
  );
};
