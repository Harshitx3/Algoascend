import { Route, Routes } from "react-router-dom";
import Page from "./app/page";
import Courses from "./app/menu-items/courses/courses";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F1115] text-white">
      <div className="flex flex-col items-center justify-center md:justify-start">
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>
    </div>
  )
}
