<<<<<<< HEAD
import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
=======
import { Route, Routes } from "react-router-dom";
import Page from "./app/page";
import Courses from "./app/menu-items/courses/courses";
>>>>>>> b8bd22360764377ccaf5dd307c29debf52309208

export default function App() {
  const isAuthed = Boolean(localStorage.getItem("token"));
  return (
    <div className="min-h-screen bg-[#0F1115] text-white">
      <div className="flex flex-col items-center justify-center md:justify-start">
        <Routes>
          <Route path="/" element={<Navigate to={isAuthed ? "/app" : "/login"} replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/app" element={<Page />} />
          <Route path="/app/courses" element={<Courses />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  )
}
