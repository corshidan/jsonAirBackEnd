const { query } = require('../db/index.js');
// Find an airline by IATA code and return it
async function getAirline(carrierCode) {
	const sqlString = `SELECT CARR_NAME FROM airlines WHERE IATA_CD='${carrierCode.toUpperCase()}';`;
	const response = await query(sqlString);
	// console.log(response);
	return response.rows[0];
}

// Add a new airline to the database
async function addAirline(airline) {
	const sqlString = `INSERT INTO airlines (IATA_CD,CARR_NAME,CARGO_IND) VALUES ($1,$2,$3) RETURNING *;`;

	const response = await query(sqlString, [
		airline.IATA_CD,
		airline.CARR_NAME,
		airline.CARGO_IND,
	]);
	return response.rows[0].carr_name;
}
// Update an existing airline from the database
async function updateAirline(airline, code) {
	const sqlString = `UPDATE airlines SET CARR_NAME=$1, CARGO_IND=$2 WHERE IATA_CD=$3 RETURNING *;`;
	console.log(airline);
	const response = await query(sqlString, [airline.CARR_NAME, airline.CARGO_IND, code]);
	return response.rows[0];
}
//Delete an airline from the database
async function deleteAirline(code) {
	const sqlString = `DELETE FROM airlines WHERE IATA_CD='${code}' RETURNING *;`;

	const response = await query(sqlString);
	return response.rows[0];
}
module.exports = { getAirline, addAirline, updateAirline, deleteAirline };
