 import React, { useEffect, useState } from "react";
 import { Link,useNavigate } from "react-router-dom";
 import classes from "./Loginpage.module.css";

 const Loginpage = () => {
     const [userid, setUserid] = useState("");
     const [password, setPassword] = useState("");
     const navigate = useNavigate();
     const [error,setError]=React.useState(false);
    

     const handleLogin = async () => {
        if( !userid || !password )
        {
          setError(true);
          return false
      
        }
        
       let result = await fetch("http://localhost:4000/login", {
         method: "post",
         body: JSON.stringify({ userid, password }),
         
         headers: {
           "Content-Type": "application/json",
         },
        
       });
       result = await result.json();
       console.warn(result);
   
         if(result.name){
           console.warn(result);
           localStorage.setItem("user", JSON.stringify(result));
           const id = JSON.parse(window.localStorage.getItem("user")).userid;
           const sid = parseInt(JSON.parse(window.localStorage.getItem("user")).userid);
          
        if (id === 'admin'){
            navigate("/adminpage")
           }
        else if (sid > 0 && sid < 9999999999){
            navigate("/bookingpage");
          }
         }
         
        else {
            
              setError(true);
              
          
            
       }
     };
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
                                             onChange={(e) => setUserid(e.target.value)}
                                             value={userid}
                                           
                                         />
                                        
                                     </label>
                                     <br></br>
                                     <label className={classes.label}>
                                         <tab></tab>
                                         <input
                                             className={classes.forminput}
                                             type="password"
                                             placeholder="Enter Password"
                                             onChange={(e) => setPassword(e.target.value)}
                                             value={password}
                                           
                                         />
                                        
                                     </label>
                                     {error &&
                                        <span className={classes.span} > Invalid ID or Password</span>}
                                     <br></br>
                                     <br></br>
                                     
                                     <button    onClick={handleLogin} type="button" className={classes.formbtn}>
                                         Log In
                                     </button>
                                     
                                     <br></br>
                                     <br></br>
                                     <p className={classes.p}>Don't have an account?</p>
                                     <Link to="/registrationpage">
                                         <button className={classes.regisbtn}>Sign Up</button>
                                     </Link>
                                    
                                         <button className={classes.homebtn}>Home</button>
                                 
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
 