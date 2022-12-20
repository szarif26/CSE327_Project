import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Bookinglist.module.css";

const Bookinglist = () => {
    const [shuttlebook, setShuttlebook] = useState([]);
   
    useEffect(() => {

        getShuttlebook()
    }, []);

    const getShuttlebook = async () => {
        let result = await fetch('http://localhost:4000/getTrips');
        result = await result.json();
        setShuttlebook(result);
    };
    console.warn(shuttlebook);

    const searchHandle = async (event) => {
        let key = event.target.value;
        if (key) {
          let result = await fetch(`http://localhost:4000/search/${key}`);
          result = await result.json();
          if (result) {
            setShuttlebook(result)
          }
        } else {
          getShuttlebook();
        }
      }

    return (

        <div className={classes.background}>
        <div className={classes.container2}>
            <div className={classes.Booking_List}>
                <Link className={classes.nounderline} to={"/Assignvehicle"}>
                    <button type="submit" className={classes.btn}>Confirm Trips & See List</button>
                </Link>

                <br></br>
                <h1 className={classes.heading}>Booking List:</h1>
                <input
          type="text"
          placeholder="Search Booking "
          className={classes.inputboxs}
          onChange={searchHandle}
        />
                <br></br>
                <ul className={classes.ul} >
                    <li className={classes.li1}>#</li>
                    <li className={classes.li}>User ID</li>
                    <li className={classes.li1}>Route</li>
                    <li className={classes.li1}>Way</li>
                    <li className={classes.li}>TimeSlot</li>
                    <li className={classes.li}>Date</li>
                </ul>
                {
                        shuttlebook.map((shuttlebook, index) => (
                            <ul key={shuttlebook}  >
                                <li className={classes.li1}>{index + 1}</li>
                                <li className={classes.li}>{shuttlebook.userid}</li>
                                <li className={classes.li1}>{shuttlebook.route}</li>
                                <li className={classes.li1}> {shuttlebook.way}</li>
                                <li className={classes.li}>{shuttlebook.timeslot}</li>
                                <li className={classes.li}>{shuttlebook.date}</li>
                            </ul>
                        ))
                    }
            </div>
        </div>
    </div>
    );
};

export default Bookinglist;