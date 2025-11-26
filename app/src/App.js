import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/Navbar";
import About from "./pages/About";
import LogIn from "./Profile/Login";
import SignUp from "./Profile/SignUp";
// import Home from "./pages/Home";

function Layout() {
  const location = useLocation();

  // Hide Nav on login & signup pages
  const hideNav = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideNav && <NavBar />}
      
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
