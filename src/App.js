import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/homepage/presentation/HomePage";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
