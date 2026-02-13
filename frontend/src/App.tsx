import Footer from "./footer/footer";
import LandingPage from "./landing/landingpage";
import Navbar from "./navbar/navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F1115] text-white">
      <div className="flex flex-col items-center justify-center md:justify-start">
        <Navbar />
        <LandingPage />
        <Footer />
      </div>
    </div>
  )
}
