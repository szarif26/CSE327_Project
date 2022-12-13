import React, { useEffect, useState } from "react";
import classes from "./Viewpasttravels.module.css";
const Viewpasttravels = () => {


 

  return (


    <div className={classes.Shuttlebook_List}>
      <div className={classes.background1}>
        <div className={classes.container2}>
          <h1 className={classes.heading}>Past Travel List</h1>
          <ul className={classes.ul}>
            <li  className={classes.li}>Route</li>
            <li  className={classes.li}>Area</li>
            <li className={classes.li}>Way</li>
            <li className={classes.li}>Date</li>
            <li className={classes.li}> Time Slot</li>

          </ul>
          <ul className={classes.ul}>
            <li  className={classes.li}></li>
            <li  className={classes.li}></li>
            <li className={classes.li}></li>
            <li className={classes.li}></li>
            <li className={classes.li}></li>

          </ul>

          
        </div>
      </div>
    </div>

  );
}

export default Viewpasttravels;