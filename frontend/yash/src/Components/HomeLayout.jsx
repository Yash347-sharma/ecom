import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Slider from "./Slider";
// import AuthCheck
import { checkLogin } from "../AuthCheck";    
import UserBar from "./UserBar";
function HomeLayout({ children }) {
  return (
    <>
      {checkLogin() && <UserBar />}

      <div className="hero_area">
        <Nav />
        <Slider />
      </div>
      {children}
      <Footer />
      </>
  
  );
}
export default HomeLayout;
