
const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Shuttlebook = require("./db/Shuttlebook");
const Route = require("./db/Route");
const Vehicle = require("./db/Vehicles");
const ConfirmedTrip = require("./db/ConfirmedTrip");

//const { find } = require("./db/User");

const app = express();

app.use(express.json());
app.use(cors());

//registration

app.post("/registerpage", async(req,resp)=>{
    let user= new User(req.body);
let result = await user.save();
resp.send(result);

});

app.post("/login", async (req, resp) => {
  if (req.body.userid && req.body.password) {
    let user = await User.findOne(req.body).select("-password");
    let detector = await User.findOne(req.body).select("userid");
    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "No User Found" });
    }
  } else {
    resp.send({ result: "No User Found" });
  }
});

app.listen(4000);



//Shuttle User
app.post("/shuttlebook", async (req, resp) => {
    let shuttlebook = new Shuttlebook(req.body);
    let result = await shuttlebook.save();
    resp.send(result);
  });
  
  app.get("/viewpasttravels/:key", async (req, resp) => {
    const shuttlebook = await Shuttlebook.find({
      "$or": [
        {
          userid: { $regex: req.params.key }
        }
      ]
    });
    if (Shuttlebook.length > 0) {
      resp.send(shuttlebook)
    } else {
      resp.send({ result: "No Travels Found" })
    }
  });

  //Shuttle Admin 

//Vehicle
app.post("/addvehicle", async (req, resp) => {
    let vehicle = new Vehicle(req.body);
    let result = await vehicle.save();
    resp.send(result);
  });
  
  app.get("/getVehicle", async (req, resp) => {
    const vehicle = await Vehicle.find();
    if (vehicle.length > 0) {
      resp.send(vehicle)
    } else {
      resp.send({ result: "No Vehicle Found" })
    }
  });
  
  app.delete("/deleteVehicle/:vehicleId", async (req, resp) => {
    let result = await Vehicle.deleteOne({ vehicleId: req.params.vehicleId });
    resp.send(result)
  });
  
  //Routes
  app.post("/addRoute", async (req, resp) => {
    let route = new Route(req.body);
    let result = await route.save();
    resp.send(result);
  });
  
  app.get("/getRoute", async (req, resp) => {
    const route = await Route.find();
    if (route.length > 0) {
      resp.send(route)
    } else {
      resp.send({ result: "No Route Found" })
    }
  });
  
  app.delete("/deleteRoute/:routeId", async (req, resp) => {
    let result = await Route.deleteOne({ routeId: req.params.routeId });
    resp.send(result)
  });
  
  //Trips
  app.get("/getTrips", async (req, resp) => {
    const shuttlebook = await Shuttlebook.find();
    if (shuttlebook.length > 0) {
      resp.send(shuttlebook)
    } else {
      resp.send({ result: "No Bookings Found" })
    }
  });

  app.get("/search/:key", async (req, resp) => {
    let result = await Shuttlebook.find({
      "$or": [
        {
          userid: { $regex: req.params.key }
  
        },
        {
          way: { $regex: req.params.key }
  
        },
        {
          route: { $regex: req.params.key }
  
        },
        {
          timeslot: { $regex: req.params.key }
  
        },
        {
          date: { $regex: req.params.key }
  
        }
      ]
    });
    resp.send(result);
  })
  
  app.get("/tripCount", async (req, resp) => {
    const shuttlebook = await Shuttlebook.find();
    if (shuttlebook.length > 0) {
  
      resp.send(shuttlebook)
    } else {
      resp.send({ result: "No Bookings Found" })
    }
  });
  
  //post booking details in assignvehicle table 
  app.post("/confirmedTrip", async (req, resp) => {
    let confirmedTrip = new ConfirmedTrip(req.body);
    let result = await confirmedTrip.save();
    resp.send(result);
  });
  
  app.get("/getCTrips", async (req, resp) => {
    const confirmedTrip = await ConfirmedTrip.find();
    if (confirmedTrip.length > 0) {
      resp.send(confirmedTrip)
    } else {
      resp.send({ result: "No Bookings Found" })
    }
  });
  
