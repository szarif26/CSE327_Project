import React from "react";
import { Link } from "react-router-dom";
import NavbarLogo from "../../Assets/NavbarLogo.png";
import Classes from "./Navbar.module.css";
const Navbar = () => {
  
  return (
    <div className={Classes.container}>
      <ul className={Classes.navul}>
        <li className={Classes.navmenubtn}>
          <Link
            className={[Classes.nounderline, Classes.navbarli].join(" ")}
            to="/"
          >
            <img
              className={Classes.navbarlogo}
              src={NavbarLogo}
              alt={NavbarLogo}
            />
          </Link>
        </li>

        <li className={Classes.li}>
          {" "}
          <Link
            className={[Classes.nounderline, Classes.navbarli].join(" ")}
            to="/"
          >
            Home
          </Link>
        </li>

        <li className={Classes.li}>
          {" "}
          <Link
            className={[Classes.nounderline, Classes.navbarli].join(" ")}
            to=""
          >
            Contact
          </Link>
        </li>
        <li className={Classes.li}>
          {" "}
          <Link
            className={[Classes.nounderline, Classes.navbarli].join(" ")}
            to=""
          >
            About
          </Link>
        </li>

        <li className={Classes.li}>
          {" "}
            <Link
              className={[Classes.nounderline, Classes.navbarli].join(" ")}
              to="/bookingpage"
            >
              Booking
            </Link>
        
        </li>

        <li className={Classes.li}>
          {" "}
       
          <Link
              className={[Classes.nounderline, Classes.navbarli].join(" ")}
              to="/"
            >
              Log In
            </Link>
            <Link
            
              className={[
                Classes.nounderline,
                Classes.navbarli,
                Classes.navbarlilogout,
              ].join(" ")}
              to="/"
            >
              Log Out
            </Link>
            
          
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
