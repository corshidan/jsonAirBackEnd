const { query } = require("../index");

// create a function to drop the Airlines table

// function to drop the Airlines table
async function dropTable() {
  const sqlstring = `DROP TABLE airlines;`;
  const res = await query(sqlstring);
  console.log("Airline table dropped!");
}

dropTable();
