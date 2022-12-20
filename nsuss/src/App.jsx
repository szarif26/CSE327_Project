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
import Bookinglist from "./components/Adminpages/Bookinglist";
import Routespage from "./components/Adminpages/Routespage";
import Vehiclepage from "./components/Adminpages/Vehiclepage";
import Assignvehicle from "./components/Adminpages/Assignvehicle";
import PrivateAdminComponents from "./components/Navbar/PrivateAdminComponent";
import PrivatePassengerComponents from "./components/Navbar/PrivatePassengerComponent";
import Contact from "./components/Homepage/Contact";
import About from "./components/Homepage/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/loginpage" exact element={<Loginpage />} />
          <Route path="/registrationpage" exact element={<Registrationpage />} />
          <Route path="/contact" exact element={<Contact/>}/>
          <Route path="/about" exact element={<About/>}/>

          <Route element={<PrivatePassengerComponents />}>
            <Route path="/bookingpage" exact element={<Bookingpage />} />
            <Route path="/viewpasttravels" exact element={<Viewpasttravels />} />
          </Route>

          <Route element={<PrivateAdminComponents />}>
            <Route path="/adminpage" exact element={<Adminpage />} />
            <Route path="/bookinglist" exact element={<Bookinglist />} />
            <Route path="/routespage" exact element={<Routespage />} />
            <Route path="/vehiclepage" exact element={<Vehiclepage />} />
            <Route path="/assignvehicle" exact element={<Assignvehicle />} />
          </Route>
        </Routes>
        <Footerpage />


      </div>
    </Router>
  );
}

export default App;