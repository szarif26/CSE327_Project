import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
              to="/booking"
            >
              Dashboard
            </Link>
        
        </li>

        <li className={Classes.li}>
          {" "}
       
          <Link
              className={[Classes.nounderline, Classes.navbarli].join(" ")}
              to="/userloginpage"
            >
              Log In
            </Link>
            <Link
            
              className={[
                Classes.nounderline,
                Classes.navbarli,
                Classes.navbarlilogout,
              ].join(" ")}
              to="/userloginpage"
            >
              Log Out
            </Link>
            
          
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
