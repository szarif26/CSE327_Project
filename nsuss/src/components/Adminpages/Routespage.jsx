import React, { useEffect, useState } from "react";
import classes from "./Routespage.module.css";

const Routepage = () => {
const [route, setRoute] = useState([]);
useEffect(() => {
    getRoute();
  }, []);
  const [routeId, setRouteId] = useState("");
  const [name, setName] = useState("");

  const handleAddRoute = async () => {
    let result = await fetch("http://localhost:4000/addRoute", {
      method: "post",
      body: JSON.stringify({ routeId, name}),
      headers: {
        "content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    alert("Successfully Added Your Route");
  };

  const getRoute = async () => {
    let result = await fetch('http://localhost:4000/getRoute');
    result = await result.json();
    setRoute(result);
  }

  const deleteRoute = async (routeId) => {
    console.warn(routeId)
    let result = await fetch(`http://localhost:4000/deleteRoute/${routeId}`, {
      method: "Delete"
    });
    result = await result.json();
    if (result) {
      getRoute();
    }
  }
  
  return (
    <div className={classes.background}>
      <div className={classes.Item_List}>
        <h1 className={classes.h1}> Add New Route </h1>
        <br></br>
        <input
          className={classes.inputbox}
          type="text"
          placeholder="Route ID"
          onChange={(e) => setRouteId(e.target.value)}
          value={routeId}/>
        <input className={classes.inputbox} type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}
          value={name} />
        <button onClick={handleAddRoute} className={classes.button}>Add Route</button>
        <br></br>
        <br></br>
        <h1 className={classes.h1}>Route List:</h1>
        <br></br>
        <ul>
          <li>Serial Number</li>
          <li>Route ID</li>
          <li>Name</li>
          <li>Delete</li>
        </ul>
        {
        route.map((route, index) =>
          <ul key={route.routeId} >
            <li>{index + 1}</li>
            <li>{route.routeId}</li>
            <li>{route.name}</li>
            <li>
              <button onClick={() => deleteRoute(route.routeId)}>Delete</button>
            </li>

          </ul>
        )
      }
      </div>
    </div>
  );
};

export default Routepage;
