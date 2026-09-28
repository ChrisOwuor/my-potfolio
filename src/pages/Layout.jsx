import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Nav";
import ScrollToTop from "../components/ScrollToTop";
export default function Layout(){return <div className="site-shell"><ScrollToTop/><Navbar/><Outlet/><Footer/></div>}
