import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Introdiv from "./components/Introdiv";
import Jouney from "./components/Journey";
import Navbar from "./components/Navbar";
import Sec from "./components/Sec";
import TechStack from "./components/TechStack";
import Third from "./components/Third";
function App() {
  return (
    <div className="App ">
      <Navbar />
      <Introdiv />
      <TechStack />
      <About />
      <div className="text-center">Past Projects</div>
      <Jouney />
      <Sec />
      <Third />
      <Contact/>
    </div>
  );
}

export default App;
