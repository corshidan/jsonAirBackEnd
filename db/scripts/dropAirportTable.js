const { query } = require("../index");

// create a function to drop the Airport table

// function to drop the Airport table
async function dropTable() {
  const sqlstring = `DROP TABLE airports;`;
  const res = await query(sqlstring);
  console.log(res);
}

dropTable();
