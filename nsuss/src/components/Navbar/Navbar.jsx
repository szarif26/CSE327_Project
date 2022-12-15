import React from "react";
import { Link } from "react-router-dom";
import Classes from "./Navbar.module.css";
const Navbar = () => {
  
  return (
    <div className={Classes.container}>
      <ul className={Classes.navul}>
        <li className={Classes.logo}>
          <Link
            className={[Classes.nounderline, Classes.logo].join(" ")}
            to="/"
          >
            Shuttle
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
              to="/adminpage"
            >
              Admin page
            </Link>
        
        </li>

        <li className={Classes.li}>
          {" "}
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
