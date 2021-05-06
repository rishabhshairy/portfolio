import "./App.css";
import About from "./components/About";
import Certs from "./components/Certs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Sidebar from "./components/Sidebar";
import "./css/style.css";

function App() {
  return (
    <div>
      <div className="container-wrap">
        <Sidebar></Sidebar>
      </div>
      <div className="container-fluid">
        <Hero></Hero>
        <div id="main">
          <About></About>
          <Resume></Resume>
          <Certs></Certs>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
