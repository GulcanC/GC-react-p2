import React from "react";
// import Navbar from "../layout/navbar";
import Footer from "../layout/footer";

const Layout = ({ children }) => {
  return (
    <main>
      <div className="main">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
