import React, { useEffect, useState } from "react";
import classes from "./Routespage.module.css";

const Routepage = () => {

  return (
    <div className={classes.background}>
      <div className={classes.Item_List}>
        <h1 className={classes.h1}> Add New Route </h1>
        <br></br>
        <input
          className={classes.inputbox}
          type="text"
          placeholder="Route ID" />
        <input className={classes.inputbox} type="text" placeholder="Name" />
        <button className={classes.button}>Add Route</button>

        <br></br>
        <div className={classes.Container}>
          <div className={classes.Routes}>
            <br></br>
            <h1 className={classes.h1}>Route List:</h1>
            <br></br>
            <ul className={classes.ul}>
              <li className={classes.li}>#</li>
              <li className={classes.li}>Route ID</li>
              <li className={classes.li}>Name</li>
              <li className={classes.li}>Delete</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Routepage;

