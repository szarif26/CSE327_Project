import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivatePassengerComponents=()=>{
    const userID = parseInt(JSON.parse(window.localStorage.getItem("user")).userid);
    const facID = JSON.parse(window.localStorage.getItem("user")).userid;
    let auth=false;
    if((userID>1000000000 && userID<9999999999) || facID.length===3||facID.length===4){
        auth=true;
    }
    else auth=false;
    return auth ? <Outlet/> : <Navigate to="/"/>
}

export default PrivatePassengerComponents;
