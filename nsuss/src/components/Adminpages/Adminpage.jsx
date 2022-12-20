import React from "react";
import { Link } from "react-router-dom";
import classes from "./Adminpage.module.css";
const Adminpage = () => {
  return (
    <div className={[classes.background, classes.container].join(" ")}>
      <div className={classes.row}>
        <div className={classes.col}>
          
          <Link className={classes.nounderline} to="/vehiclepage">
            <button type="submit" className={classes.button}>
              <div className={classes.board3}>
                <h5 className={classes.h5}>Vehicles</h5>
                <p className={classes.p}>
                  <b> </b>
                </p>
              </div>
            </button>
          </Link>
          <Link className={classes.nounderline} to="/routespage">
            <button type="submit" className={classes.button}>
              <div className={classes.board2}>
                <h5 className={classes.h5}>Routes</h5>
                <p className={classes.p}>
                  <b></b>
                </p>
              </div>
            </button>
          </Link>
          <Link className={classes.nounderline} to="/bookinglist">
            <button type="submit" className={classes.button}>
              <div className={classes.board3}>
                <h5 className={classes.h5}>Bookinglist</h5>
                <p className={classes.p}>
                  <b> </b>
                </p>
              </div>
            </button>
          </Link>
         
        </div>
        <div className={classes.col}>
          <h1 className={classes.h11}>Welcome Admin</h1>
          <p className={classes.pp}>To Dashboard</p>
          <button type="submit" className={classes.btn}>
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Adminpage;
