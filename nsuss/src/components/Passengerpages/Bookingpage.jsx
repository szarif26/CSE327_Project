import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Bookingpage.module.css";


const Bookingpage = () => {
  const [userid, setUserid] = useState(JSON.parse(window.localStorage.getItem("user")).userid);
  const [route, setRoute] = useState("");
  const [way, setWay] = useState("");
  const [timeslot, setTimeslot] = useState("");
  const [date, setDate] = useState("");
  const [success,setSuccess]=React.useState(false);

  const handleshuttlebook= async ()=>{
    
    console.warn( userid, route, way, timeslot, date)
    let result = await fetch("http://localhost:4000/shuttlebook",{
      method: 'post',
      body:JSON.stringify({ userid, route, way, timeslot, date}),
      headers:{
        'content-Type':'application/json'
      }
    });
    result= await result.json();
    console.warn(result);
    alert("Successfully Booked Your Seat");
  }

  {
    var startday = new Date();
    startday.setDate(startday.getDate() + 1);
    var dd = startday.getDate();
    var mm = startday.getMonth() + 1; //January is 0!
    var yyyy = startday.getFullYear();
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }
    startday = yyyy + '-' + mm + '-' + dd;
  }
  {
    var finalday = new Date();
    finalday.setDate(finalday.getDate() + 7);
    var fdd = finalday.getDate();
    var fmm = finalday.getMonth() + 1; //January is 0!
    var fyyyy = finalday.getFullYear();
    if (fdd < 10) {
      fdd = '0' + fdd
    }
    if (fmm < 10) {
      fmm = '0' + fmm
    }
    finalday = fyyyy + '-' + fmm + '-' + fdd;
  }
  return (
    <div className={[classes.background, classes.container].join(" ")}>
      <div className={classes.row}>
        <div className={classes.col}>
          <div className={classes.content}>
            <div className={classes.container2}>
              <div className={classes.textcenter}>
                <h2 className={classes.formh2}>Booking Form</h2>
                <form>
                <select hidden onChange={(e) => setUserid(e.target.value)}
                value={userid} ></select>
                
                  <label className={classes.label}>
                    <tab></tab>
                    <select onChange={(e) => setRoute(e.target.value)}
                value={route} className={classes.forminput} name="Area">
                      <option
                        className={classes.formselect}
                        value=""
                        disabled
                        selected
                        hidden
                      >
                        Area
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
                  </label>
                  <label className={classes.label}>
                    <tab></tab>
                    <select  onChange={(e) => setWay(e.target.value)}
                value={way} className={classes.forminput} name="way">
                      <option
                        className={classes.formselect}
                        value=""
                        disabled
                        selected
                        hidden
                      >
                        Way
                      </option>
                      <option className={classes.formselect} value="Arrival">
                        Arrival
                      </option>
                      <option className={classes.formselect} value="Departure">
                        Departure
                      </option>
                    </select>
                  </label>
                  <label className={classes.label}>
                    <tab></tab>
                    <select  onChange={(e) => setTimeslot(e.target.value)}
                value={timeslot} className={classes.forminput} name="time_slot">
                      <option
                        className={classes.formselect}
                        value=""
                        disabled
                        selected
                        hidden
                      >
                        Timeslot
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
                  </label>
                  <label className={classes.label}>
                    <tab></tab>
                    <input onChange={(e) => setDate(e.target.value)}
                value={date} className={classes.forminput}
                      id="dateRequired"
                      type="date"
                      name="dateRequired"
                      min={startday} max={finalday}
                    />
                  </label>
                  <br></br>
                  <br></br>
                  <button onClick={handleshuttlebook}  className={classes.btn}>Confirm Booking</button>
               
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.col}>
          <h1 className={classes.h11}>To book a Seat fill the form</h1>
          <Link className={classes.nounderline} to="/Viewpasttravels">
            <button type="submit" className={classes.btn} >Travel Log</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Bookingpage;
