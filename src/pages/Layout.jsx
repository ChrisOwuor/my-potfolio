import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Example from "../components/Nav";
// import "../assets/main.css"
export default function Layout() {
  return (
    <>
      <Example/>
      <Outlet />
      <Footer />
    </>
  );
}
