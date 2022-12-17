import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layout/layout";
import HomePage from "../pages/homePage";
import MainPage from "../pages/mainPage";

const About = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route element={<Navigate replace to="/home" />} path="/" />
          <Route path="/home" element={<HomePage />} />
          <Route path="/card/:id" element={<MainPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};
export default About;
