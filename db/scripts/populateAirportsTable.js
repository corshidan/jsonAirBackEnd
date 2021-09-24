const { query } = require("../index");
const { data } = require("../../all_data/airports.js")

async function populateAirportTable() {
     let rows =0 ;
  for (let i = 0; i < data.length; i++) {
    const {
      PORT_IATA,
      PORT_NAME,
      PORT_TYPE_DESC,
      LAT_DEC,
      LONG_DEC,
      LAT,
      LONG,
      CITY_CODE,
      CITY_NAME,
    } = data[i];
    const response = await query("INSERT INTO airports (PORT_IATA,PORT_NAME,PORT_TYPE_DESC,LAT_DEC,LONG_DEC,LAT,LONG,CITY_CODE,CITY_NAME) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)", [
      PORT_IATA,
      PORT_NAME,
      PORT_TYPE_DESC,
      LAT_DEC,
      LONG_DEC,
      LAT,
      LONG,
      CITY_CODE,
      CITY_NAME,
    ]);
    rows++
  }
  console.log(`Added ${rows} into the airports table`)
}

populateAirportTable();
