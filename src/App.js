import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Introdiv from "./components/Introdiv";
import Jouney from "./components/Journey";
import Navbar from "./components/Navbar";
import Sec from "./components/Sec";
import TechStack from "./components/TechStack";
import Third from "./components/Third";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App ">
      <Navbar />
      <Introdiv />
      <TechStack /><hr />
      <About />
      <div className="text-center  underline font-mono text-lg font-bold">
        My Projects
      </div>
      <Jouney />
      <Sec />
      <Third />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
