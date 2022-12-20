import React from "react";

import classes from "./Contact.module.css";
const Contact = () => {
    

    return (
        <div className={classes.background} >

            <div className={classes.row}>
                <div className={classes.col}>
                    <div className={classes.content}>
                        <h1 className={classes.contenth1}> Location :<span className={classes.contentspan}> SAC1109 North South University, Bashundhara, Dhaka-1229, Bangladesh</span> </h1>
                        <h1 > Phone: <span className={classes.contentspan}> +880-2-55668200</span> </h1>
                        <h1 >  Fax:<span className={classes.contentspan}> +880-2-55668202</span> </h1>
                        <h1 >  Email:<span className={classes.contentspan}> nsuShuttle@northsouth.edu</span> </h1>
                       
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
export default Contact;
