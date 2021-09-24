const { query } = require("../index");

// function to create the table on heroku
async function createAirlinesTable() {
  const sqlString = `CREATE TABLE airlines (
    id SERIAL PRIMARY KEY,
    IATA_CD TEXT,
    CARR_NAME TEXT,
    CARGO_IND TEXT
    );
    `;

  try {
    const res = await query(sqlString);
    console.log("created airlines table");
  } catch (error) {
    console.log(error);
  }
}

createAirlinesTable();
