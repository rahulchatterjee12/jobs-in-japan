import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="mx-2 md:mx-2 min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
