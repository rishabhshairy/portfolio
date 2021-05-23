import "./App.css";
import About from "./components/About";
import Certs from "./components/Certs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Sidebar from "./components/Sidebar";
import "./css/style.css";

function App() {
  return (
    <div>
      <div className="container-wrap">
        <Sidebar></Sidebar>
      </div>
      <div className="p-0 container-small">
        <Hero></Hero>
        <main id="main container-fluid">
          <About></About>
          <Resume></Resume>
          <Projects></Projects>
          <Certs></Certs>
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
