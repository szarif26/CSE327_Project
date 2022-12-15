import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footerpage from "./components/Footerpage/Footerpage";
import Bookingpage from "./components/Passengerpages/Bookingpage";
import Viewpasttravels from "./components/Passengerpages/Viewpasttravels";
import Homepage from "./components/Homepage/Homepage";
import Loginpage from "./components/Login/Userloginpage/Loginpage";
import Registrationpage from "./components/Create New Account/registrationpage";
import Adminpage from "./components/Adminpages/Adminpage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/bookingpage" exact element={<Bookingpage />} />
          <Route path="/viewpasttravels" exact element={<Viewpasttravels />} />
          <Route path="/loginpage" exact element={<Loginpage />} />
          <Route path="/registrationpage" exact element={<Registrationpage/>} />
          <Route path="/adminpage" exact element={<Adminpage/>} />
        </Routes>

        <Footerpage />


      </div>
    </Router>
  );
}

export default App;