import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Classes from "./Navbar.module.css";
const Navbar = () => {
  const auth = localStorage.getItem("user");
  
  let passAuth = false;
  
    if(auth){
      const studID = parseInt(JSON.parse(window.localStorage.getItem("user")).userid);
      const facID = JSON.parse(window.localStorage.getItem("user")).userid;
      if ((studID>1000000000 && studID<9999999999) || facID.length===3||facID.length===4) {
        passAuth = true;
      } else passAuth = false;
    }
  
    let adAuth = false;
  
    if(auth){
      const adID = JSON.parse(window.localStorage.getItem("user")).userid;
      if (adID==='admin') {
        adAuth = true;
      } else adAuth = false;
    }

  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  
  return (
    <div className={Classes.container}>
      <ul className={Classes.navul}>
        <li className={Classes.logo}>
          <Link
            className={[Classes.nounderline, Classes.logo].join(" ")}
            to="/"
          >
            NSU Shuttle
          </Link>
        </li>

        <li className={Classes.li}>
          {" "}
          <Link
            className={[Classes.nounderline, Classes.navbarli].join(" ")}
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <li className={Classes.li}>
          {" "}
          <Link
            className={[Classes.nounderline, Classes.navbarli].join(" ")}
            to="/about"
          >
            About
          </Link>
        </li>

        <li className={Classes.li}>
          {" "}
          {adAuth ? (
            <Link
            className={[Classes.nounderline, Classes.navbarli].join(" ")}
            to="/adminpage"
          >
            Admin page
          </Link>
          ) : null}
        </li>

        <li className={Classes.li}>
          {" "}
          {passAuth ? (
            <Link
            className={[Classes.nounderline, Classes.navbarli].join(" ")}
            to="/bookingpage"
          >
            Booking Page
          </Link>
          ) : null}
        </li>
        
        <li className={Classes.li}>
          {" "}
          {auth ? (
            <Link
            onClick={logout}
            className={[
              Classes.nounderline,
              Classes.navbarli,
              Classes.navbarlilogout,
            ].join(" ")}
            to="/"
          >
            Log Out
          </Link>
          ) :null}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
