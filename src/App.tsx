import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import UsersList from "./pages/UsersList/UsersList";
import UserPage from "./pages/UserPage/UserPage";

const App = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="user/:id" element={<UserPage />} />
          <Route path="/" element={<UsersList />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
