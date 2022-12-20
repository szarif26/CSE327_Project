
import React, {useState} from "react";
import { useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import classes from "./registrationpage.module.css";
const registrationpage = () => {

const [ name ,setName]=useState("");
const [ password ,setPassword]=useState("");
const [ confirmpassword ,setConfirmpassword]=useState("");
const [ userid  ,setUserid]=useState("");
const [ email ,setEmail]=useState("");
const navigate = useNavigate();
const [error,setError]=React.useState(false);
const [errorrrr,setErrorrrr]=React.useState(false);



const handleregistration =async()=>{
  if(!name || !userid || !password || !email )
  {
    setError(true);
    return false

  }
 
if  (password != confirmpassword){
    setErrorrrr(true);
    return false

}

 


    console.warn(name,userid,email,password,confirmpassword);
    let result =await fetch(" http://localhost:4000/registerpage",{
        method:  "post",
        body: JSON.stringify({ name,userid,email,password,confirmpassword }),
        headers: {
          "content-Type": "application/json",
        }
    });
result= await result.json();


if(result.name){
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result));
    const id = JSON.parse(window.localStorage.getItem("user")).userid;
    const sid = parseInt(JSON.parse(window.localStorage.getItem("user")).userid);
    navigate('/loginpage')  
}
  
 else {
  alert("Wrong ID or Password");
}
}

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
                                            value={userid} onChange={(e)=>setUserid(e.target.value)}
                                        />
                                        {error && !userid &&
                                        <span className={classes.span}> Enter Userid</span>}
                                    </label>
                                    <label className={classes.label}>
                                        <tab></tab>
                                        <input
                                            className={classes.forminput}
                                            type="text"
                                            placeholder="Enter Name"
                                            value={name} onChange={(e)=>setName(e.target.value)}

                                        />
                                         {error && !name &&
                                        <span className={classes.span}> Enter Name</span>}
                                    </label>
                                    <label className={classes.label}>
                                        <tab></tab>
                                        <input
                                            className={classes.forminput}
                                            type="text"
                                            placeholder="Enter Email"
                                            value={email} onChange={(e)=>setEmail(e.target.value)}
                                        />
                                         {error && !email &&
                                        <span className={classes.span}> Enter email</span>}
                                    </label>
                                    <label className={classes.label}>
                                        <tab></tab>
                                        <input
                                            className={classes.forminput}
                                            type="password"
                                            placeholder="Enter Password"
                                            value={password} onChange={(e)=>setPassword(e.target.value)}
                                        />
                                         {error && !password &&
                                        <span className={classes.span}> Enter Password</span>}
                                    </label>
                                    <br></br>
                                    <label className={classes.label}>
                                        <tab></tab>
                                        <input
                                            className={classes.forminput}
                                            type="password"
                                            placeholder="Confirm Password"
                                            value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)}
                                        />
                                      
                                         {errorrrr  && (password != confirmpassword) && 
                                        <span className={classes.span}> Password Doesn't Match</span>}
                                    </label>
                                    <br></br>
                                    <br></br>

                                    <button
                                        onClick={handleregistration }
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