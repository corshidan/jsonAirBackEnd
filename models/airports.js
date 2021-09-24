const { query } = require("../db/index.js");

async function getAirportData(airportCode) {
  const sqlString = `SELECT LAT,LONG,PORT_NAME,CITY_NAME FROM airports WHERE PORT_IATA='${airportCode.toUpperCase()}';`;
  const response = await query(sqlString);
  return response.rows[0];
}
// Add a new airport to the database
async function addAirport(airport) {
  const sqlString = `INSERT INTO airports (PORT_IATA, PORT_NAME, PORT_TYPE_DESC, LAT_DEC,LONG_DEC, LAT, LONG, CITY_CODE, CITY_NAME, COUNTRY_CODE, ACTIVE) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *;`;

  const response = await query(sqlString, [
    airports.PORT_IATA,
    airports.PORT_NAME,
    airports.PORT_TYPE_DESC,
    airports.LAT_DEC,
    airports.LONG_DEC,
    airports.LAT,
    airports.LONG,
    airports.CITY_CODE,
    airports.CITY_NAME,
    airports.COUNTRY_CODE,
    airports.ACTIVE,
  ]);
  return response.rows[0].PORT_NAME;
}
// Update an existing airport from the database
async function updateAirport(airport, code) {
  const sqlString = `UPDATE airports SETPORT_IATA=$1, PORT_NAME=$2, PORT_TYPE_DESC=$3, LAT_DEC=$4,LONG_DEC=$5, LAT=$6, LONG=$7, CITY_CODE=$8, CITY_NAME=$9, COUNTRY_CODE=$10, ACTIVE=$11 RETURNING *;`;
  console.log(airport);
  const response = await query(sqlString, [
    airports.PORT_IATA,
    airports.PORT_NAME,
    airports.PORT_TYPE_DESC,
    airports.LAT_DEC,
    airports.LONG_DEC,
    airports.LAT,
    airports.LONG,
    airports.CITY_CODE,
    airports.CITY_NAME,
    airports.COUNTRY_CODE,
    airports.ACTIVE,
    code,
  ]);
  return response.rows[0];
}
//Delete an airport from the database
async function deleteAirport(code) {
  const sqlString = `DELETE FROM airports WHERE PORT_NAME='${code}' RETURNING *;`;

  const response = await query(sqlString);
  return response.rows[0];
}

// async function test(){
// console.log(await getAirportLocation("CDG"))

// }
// test()
module.exports = { getAirportData, addAirport, updateAirport, deleteAirport };
