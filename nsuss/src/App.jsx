import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footerpage from "./components/Footerpage/Footerpage";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Footerpage/>
       
      </div>
    </Router>
  );
}

export default App;