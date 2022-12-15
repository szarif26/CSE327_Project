import React, { useEffect, useState } from "react";
import classes from "./Vehiclepage.module.css";

const Vehiclepage = () => {

    return (
        <div className={classes.background}>
            <div className={classes.Item_List}>
                <h1 className={classes.h1}> Add New Vehicle </h1>
                <br></br>
                <input
                    className={classes.inputbox}
                    type="text"
                    placeholder="Vehicle ID" />
                <input className={classes.inputbox} type="text" placeholder="Brand" />
                <input className={classes.inputbox} type="text" placeholder="Model" />
                <input
                    className={classes.inputbox}
                    type="text"
                    placeholder="Registration Number"

                />
                <input
                    className={classes.inputbox}
                    type="text"
                    placeholder="Capacity"
                ></input>
                <button className={classes.button}>Add Vehicle</button>
                <br></br>
                <br></br>
                <div className={classes.Container}>
                    <div className={classes.Vehicles}>
                        <h1 className={classes.h1}>Vehicle List:</h1>
                        <br></br>
                        <ul className={classes.ul}>
                            <li className={classes.li1}>#</li>
                            <li className={classes.li}>Vehicle ID</li>
                            <li className={classes.li1}>Brand</li>
                            <li className={classes.li}>Model</li>
                            <li className={classes.li2}>Registration Number</li>
                            <li className={classes.li1}>Capacity</li>
                            <li className={classes.li1}>Delete</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vehiclepage;
