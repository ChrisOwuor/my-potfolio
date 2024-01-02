import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../pages/Layout";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Articles from "../pages/Articles";
import Tools from "../pages/Tools";
import Uses from "../pages/Uses";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="articles" element={<Articles />} />
      <Route path="about" element={<About />} />
      <Route path="skills" element={<Tools />} />
      <Route path="projects" element={<Projects />} />
      <Route path="uses" element={<Uses/>} />
    </Route>
  )
);

export default router;
