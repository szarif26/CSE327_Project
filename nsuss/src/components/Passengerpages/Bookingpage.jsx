import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Bookingpage.module.css";


const Bookingpage =()=> {
  return (
    <div className={[classes.background, classes.container].join(" ")}>
      <div className={classes.row}>
        <div className={classes.col}>
          <div className={classes.form}>
          

            <label className={classes.formlabel}>Route</label>
            <select className={classes.formselect} name="Area">
              <option
                className={classes.formselect}
                value=""
                disabled
                selected
                hidden
              >
                Select an option
              </option>
              <option className={classes.formselect} value="Uttara">
                Uttara
              </option>
              <option className={classes.formselect} value="Dhanmondi">
                Dhanmondi
              </option>
              <option className={classes.formselect} value="Jatrabari">
                Jatrabari
              </option>
              <option className={classes.formselect} value="Mirpur">
                Mirpur
              </option>
              <option className={classes.formselect} value="Azimpur">
                Azimpur
              </option>
            </select>

            <br></br>
            <br></br>

            <label className={classes.formlabel}>Way</label>
            <select className={classes.formselect} name="Area">
              <option
                className={classes.formselect}
                value=""
                disabled
                selected
                hidden
              >
                Select an option
              </option>
              <option className={classes.formselect} value="Arrival">
                Arrival
              </option>
              <option className={classes.formselect} value="Departure">
                Departure
              </option>
            </select>

            <br></br>
            <br></br>

            <label className={classes.formlabel}>Time Slot</label>
            <select  className={classes.formselect} name="time_slot">
              <option
                className={classes.formselect}
                value=""
                disabled
                selected
                hidden
              >
                Select a Slot
              </option>
              <option className={classes.formselect} value="8:00AM">
                8:00AM
              </option>
              <option className={classes.formselect} value="9:40AM">
                9:40AM
              </option>
              <option className={classes.formselect} value="11:20AM">
                11:20AM
              </option>
              <option className={classes.formselect} value="1:00PM">
                1:00PM
              </option>
              <option className={classes.formselect} value="2:40PM">
                2:40PM
              </option>
              <option className={classes.formselect} value="4:20PM">
                4:20PM
              </option>
            </select>

            <br></br>
            <br></br>

            <label className={classes.formlabel}>Date</label>
            <input  className={classes.formselect}
              id="dateRequired"
              type="date"
              name="dateRequired" 
            />

            <br></br>
            <br></br>

            <button className={classes.bttn} >Confirm Booking</button>
          </div>
        </div>

        <div className={classes.col}>
          <h1 className={classes.h1}>To book a Seat fill the form</h1>
          <Link className={classes.nounderline} to="/Viewpasttravels">
            <button type="submit" className={classes.btn} >View Past Travels</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Bookingpage;
