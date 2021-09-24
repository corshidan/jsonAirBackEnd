const { query } = require("../index");

// create a table that takes in PORT_IATA	PORT_ICAO	PORT_FAA	PORT_NAME	PORT_TYPE_ID	PORT_TYPE_DESC	MAC_IND	LAT_DEC	LONG_DEC	LAT	LONG	CITY_CODE	CITY_NAME	STATE_CODE	COUNTRY_CODE	REGION_CODE	ACTIVE	COUNTRY_DOT	STATE_DOT	SUB_COUNTRY_DOT	TIMEZONE	TIMEZONE_DESC into airportTable then call the function

// function to create the table in postgres
async function createAirportsTable() {
  const sqlString = `CREATE TABLE airports(
        id SERIAL PRIMARY KEY,
        PORT_IATA TEXT,
        PORT_NAME TEXT,	
        PORT_TYPE_DESC TEXT,
        LAT_DEC  TEXT,
        LONG_DEC  TEXT,
        LAT TEXT,
        LONG TEXT,
        CITY_CODE TEXT,	
        CITY_NAME TEXT,
        COUNTRY_CODE TEXT,  
        ACTIVE TEXT
    );
    `;

  try {
    const res = await query(sqlString);
    console.log("created airport table");
  } catch (error) {
    console.log(error);
  }
}

createAirportsTable();
