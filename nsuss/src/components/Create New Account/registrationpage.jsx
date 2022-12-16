import React from "react";
import { Link } from "react-router-dom";
import classes from "./registrationpage.module.css";
const registrationpage = () => {

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
                                    <label className={classes.label}>
                                        <tab></tab>
                                        <input
                                            className={classes.forminput}
                                            type="text"
                                            placeholder="Enter Email"
                                        />
                                    </label>
                                    <label className={classes.label}>
                                        <tab></tab>
                                        <input
                                            className={classes.forminput}
                                            type="text"
                                            placeholder="Enter Password"
                                        />
                                    </label>
                                    <br></br>
                                    <label className={classes.label}>
                                        <tab></tab>
                                        <input
                                            className={classes.forminput}
                                            type="password"
                                            placeholder="Confirm Password"
                                        />
                                    </label>
                                    <br></br>
                                    <br></br>
                                    <button
                                        type="button"
                                        className={classes.formbtn}
                                    >
                                        Sign Up
                                    </button>
                                    <br></br>
                                    <br></br>
                                    <p className={classes.p}>Already have an account?</p>
                                    <Link to="/loginpage">
                                        <button className={classes.loginbtn}>Log In</button>
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
export default registrationpage;
