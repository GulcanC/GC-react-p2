import React from "react";
import Navbar from "../layout/navbar";
import Footer from "../layout/footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
