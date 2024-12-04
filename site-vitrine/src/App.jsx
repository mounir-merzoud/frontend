import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/LoginForm/RegisterForm";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import ContentHeader from "./components/ContentHeader";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes pour les pages Login et Register */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

        {/* Dashboard avec ses composants imbriqués */}
        <Route
          path="/dashboard"
          element={
            <div className="dashboard">
              <Sidebar />
              <div className="dashboard--content">
                <ContentHeader />
                <Content />
                <Profile />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
