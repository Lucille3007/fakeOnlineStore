import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarHeadline from './components/NavbarHeadline';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//Pages
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from "./pages/Cart";
import About from './pages/About';


function App() {
  return (
    <Router>
      <main className="App" style={{ backgroundColor: '#E5E1DA'}}>
        
        <NavbarHeadline />

        <div className="content">
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />

          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
