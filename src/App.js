import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Api from './components/Api';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/API" element={<Api />}/> 
          {/* <Route path="/contact" component={Contact} /> */}
          {/* <Route component={NotFound} /> */}
        </Routes>
      </div>
      <div>
        etst
      </div>
    </Router>
  );
}

export default App;
