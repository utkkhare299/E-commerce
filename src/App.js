import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navigation from "./components/Navbar";
import About from "./components/About";
import Store from "./components/Store";
import Contact from "./components/Contact";
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
