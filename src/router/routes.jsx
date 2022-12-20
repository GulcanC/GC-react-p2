import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layout/layout";
import HomePage from "../pages/homePage";
import MainPage from "../pages/mainPage";
import AboutPage from "../pages/aboutPage";
import ErrorPage from "../pages/errorPage";

const About = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route element={<Navigate replace to="/home" />} path="/" />
          <Route path="/home" element={<HomePage />} />
          <Route path="/card/:id" element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};
export default About;
