import React from "react";

import classes from "./About.module.css";
const About = () => {
    const auth = localStorage.getItem("user");

    return (
        <div className={classes.background} >

            <div className={classes.row}>
                <div className={classes.col}>
                    <div className={classes.content}>

                        <p className={classes.contentpar}>Whether you are travelling to work or study, rethink the daily commute. NSUSS makes commutes more reliable, convenient, and affordable for NSU students and faculties  <br></br></p>
                        <h1 className={classes.contentpar3}> How to book a ride?</h1>
                        <p className={classes.contentpar}>1.Tap the Booking button
                            <br></br>
                            2.Select a Route
                            <br></br>

                            3.Pick the date and time of your commute
                            <br></br>


                            4.Tap confirm and your ride will be scheduled. Enjoy!



                            <br></br></p>
                    </div>
                </div>
                <div className={classes.col}>
                    <div className={classes.board}>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default About;
