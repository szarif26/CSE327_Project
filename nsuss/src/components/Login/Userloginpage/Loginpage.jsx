import React from "react";
import { Link } from "react-router-dom";
import classes from "./Loginpage.module.css";
const Loginpage = () => {

    return (
        <div className={classes.background} >

            <div className={classes.row}>
                <div className={classes.col}>
                    <div className={classes.content}>
                        <div className={classes.container2}>
                            <div className={classes.textcenter}>
                                <h2 className={classes.formh2}>Welcome User</h2>
                                <form>
                                    <label className={classes.label}>
                                        <tab></tab>
                                        <input
                                            className={classes.forminput}
                                            type="text"
                                            placeholder="Enter ID"
                                        />
                                    </label>
                                    <br></br>
                                    <label className={classes.label}>
                                        <tab></tab>
                                        <input
                                            className={classes.forminput}
                                            type="password"
                                            placeholder="Enter Password"
                                        />
                                    </label>
                                    <br></br>
                                    <br></br>
                                    <Link to="/bookingpage">
                                    <button type="button" className={classes.formbtn}>
                                        Log In
                                    </button>
                                    </Link>
                                    <br></br>
                                    <br></br>
                                    <p className={classes.p}>Don't have an account?</p>
                                    <Link to="/registrationpage">
                                        <button className={classes.regisbtn}>Sign Up</button>
                                    </Link>
                                    <Link to="/">
                                        <button className={classes.homebtn}>Home</button>
                                    </Link>
                                </form>
                            </div>
                        </div>
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
export default Loginpage;
