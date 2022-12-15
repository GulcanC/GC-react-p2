import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layout/layout";

const About = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route element={<Navigate replace to="/home" />} path="/" />
        </Routes>
      </Layout>
    </HashRouter>
  );
};
export default About;
