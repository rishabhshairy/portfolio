import './App.css';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <div className="container-wrap"><Sidebar></Sidebar></div>
      <div className="container-fluid"><Hero></Hero></div>
    </div>
  );
}

export default App;
