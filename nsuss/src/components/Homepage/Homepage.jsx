import React from "react";
import classes from "./Homepage.module.css";
const Homepage = () => {

    return (
        <div className={classes.background} >

            <div className={classes.row}>
                <div className={classes.col}>
                    <div className={classes.content}>
                        <h1 className={classes.contenth1}> Book a <span className={classes.contentspan}>Seat</span> with us</h1>
                        <p className={classes.contentpar}>Commute daily in AC Sedans. Book a seat to enjoy rides at <br></br>fixed prices and affordable
                            rates.</p>
                            <button className={classes.button}>Login</button>
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
export default Homepage;
