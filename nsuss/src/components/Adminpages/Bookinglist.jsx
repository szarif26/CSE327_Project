import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Bookinglist.module.css";

const Bookinglist = () => {
    return (

        <div className={classes.background1}>
            <div className={classes.container2}>
                <div className={classes.Booking_List}>
                    <br></br>
                    <h1 className={classes.heading}>Booking List:</h1>
                    <br></br>
                    <ul className={classes.ul} >
                        <li className={classes.li1}>#</li>
                        <li className={classes.li}>User ID</li>
                        <li className={classes.li1}>Route</li>
                        <li className={classes.li1}>Way</li>
                        <li className={classes.li}>TimeSlot</li>
                        <li className={classes.li}>Date</li>
                        <li className={classes.li}>Vehicle-Id</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Bookinglist;