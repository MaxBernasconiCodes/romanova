import "./App.css";
import ReactDOM from "react-dom/client";
import Home from "../src/pages/home";
import Products from "../src/pages/products";
import Sizes from "../src/pages/sizes";
import FAQ from "../src/pages/faq";
import About from "../src/pages/about";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <nav className="navbar">
          <div className="navItem"></div>
          <div className="navItem logoItem">
            <p className="logo"> Romanova </p>
          </div>
          <div className="navItem">
              <ul className="siteNav">
                <li>Home</li>
                <li>Productos</li>
                <li>Talles</li>
                <li>Envios</li>
                <li>FAQ</li>
                <li>Nosotros</li>
                <li>Contacto</li>
              </ul>
          </div>
        </nav>

        <div className="main">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="sizes" element={<Sizes />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="aboutus" element={<About />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
