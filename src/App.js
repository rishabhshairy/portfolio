import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
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
        </div>
      </div>
    </div>
  );
}

export default App;
