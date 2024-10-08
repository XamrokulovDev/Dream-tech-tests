import { Outlet, useLocation } from "react-router-dom";
// import Navbar 
import Navbar from "../components/navbar";
// import Footer 
import Footer from "../components/footer";

const Routerlayout = () => {
  const location = useLocation();
  const isAuthPage = 
    location.pathname === '/login' ||
    location.pathname === '/register' ||
    location.pathname.startsWith('/_admin_panel') ||
    location.pathname === "/frontend/junior" ||
    location.pathname === "/frontend/middle" ||
    location.pathname === "/frontend/senior"

  return (
    <>
      {!isAuthPage && <Navbar />}
      <Outlet />
      {!isAuthPage && <Footer />}
    </>
  );
}

export default Routerlayout;