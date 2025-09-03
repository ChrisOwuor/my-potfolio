import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Example from "../components/Nav";
import ScrollToTop from "../components/ScrollToTop";
// import "../assets/main.css"
export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Example />
      <Outlet />
      <Footer />
    </>
  );
}
