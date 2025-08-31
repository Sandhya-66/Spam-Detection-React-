// src/App.jsx
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Mail from "./pages/Mail";
import Message from "./pages/Message";
import Audio from "./pages/Audio";
import Website from "./pages/Website";

export default function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Routes */}
      <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
      <Route path="/services" element={<ProtectedRoute><Services /></ProtectedRoute>} />
      <Route path="/mail" element={<ProtectedRoute><Mail /></ProtectedRoute>} />
      <Route path="/message" element={<ProtectedRoute><Message /></ProtectedRoute>} />
      <Route path="/audio" element={<ProtectedRoute><Audio /></ProtectedRoute>} />
      <Route path="/website" element={<ProtectedRoute><Website /></ProtectedRoute>} />

      {/* Fallback */}
      <Route path="*" element={<Login />} />
    </Routes>
  );
}
