const express = require("express");
const airportRouter = express.Router();
const {
  getAirportLocation,
  addAirport,
  updateAirport,
  deleteAirport,
} = require("../models/airports.js");

airportRouter.get("/", async function (req, res) {
  const { code } = req.query;
  if (code) {
    const data = await getAirportLocation(code);
    // res.json what we get back
    res.json({
      success: true,
      message: `Here is the aiport with the code: ${code.toUpperCase()} `,
      payload: data,
    });
    return;
  }
  res.json({
    success: true,
    message: "Search by the airports IATA code",
  });
});

//Route to add a new airport
airportRouter.post("/", async (req, res) => {
  const { body } = req;
  const response = await addAirport(body);
  res.json({
    success: true,
    message: "Airport added successfully",
    payload: response,
  });
});
//Route to update an existing airport
airportRouter.put("/:code", async (req, res) => {
  const { body } = req;
  const { code } = req.params;
  console.log("from put route", body, code);
  const response = await updateAirport(body);
  res.json({
    success: true,
    message: "Airport UPDATE successfully",
    payload: response,
  });
});
//Route to delete airport
airportRouter.delete("/:code", async (req, res) => {
  const { code } = req.params;
  const data = await deleteAirport();
  console.log(code, data);
  res.json({
    success: true,
    message: "Airport deleted successfully",
    payload: data,
  });
});
module.exports = airportRouter;
