import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layout/layout";
import HomePage from "../pages/homePage";

const About = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route element={<Navigate replace to="/home" />} path="/" />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};
export default About;
