const express = require("express");
const airlineRouter = express.Router();
const {
  getAirline,
  addAirline,
  updateAirline,
  deleteAirline,
} = require("../models/airlines");

airlineRouter.get("/", async function (req, res) {
  const { code } = req.query;
  if (code) {
    const data = await getAirline(code);
    // console.log(data);
    res.json({
      success: true,
      message: `Here is the airline with the code: ${code.toUpperCase()} `,
      payload: data,
    });
    return;
  }
  res.json({
    success: true,
    message: "Search by the airlines IATA code",
  });
});
//Route to add a new airline
airlineRouter.post("/", async (req, res) => {
  const { body } = req;
  const response = await addAirline(body);
  res.json({
    success: true,
    message: "Airline added successfully",
    payload: response,
  });
});
//Route to update an existing airline
airlineRouter.put("/:code", async (req, res) => {
  const { body } = req;
  const { code } = req.params;
  console.log("from put route", body, code);
  const response = await updateAirline(body, code.toUpperCase());
  res.json({
    success: true,
    message: "Airline UPDATE successfully",
    payload: response,
  });
});
//Route to delete airline
airlineRouter.delete("/:code", async (req, res) => {
  const { code } = req.params;
  const data = await deleteAirline(code.toUpperCase());
  console.log(code, data);
  res.json({
    success: true,
    message: "Airline deleted successfully",
    payload: data,
  });
});
module.exports = airlineRouter;
