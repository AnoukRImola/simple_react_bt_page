// import logo from './logo.svg';
// import './App.css';
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";
//azucar sintactico: JSX => JS + HTML/XML

function App() {

  return (
    <div className="App">
      <Navbar />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
