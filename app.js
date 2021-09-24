const express = require('express');
const cors = require('cors');
const { fetchData } = require('./fetchData');
const airlinesRouter = require('./routes/airlines.js');
const airportsRouter = require('./routes/airports.js');
const dummyData = require('./dummyData');
// const fs = require('fs');
// const stream = fs.createWriteStream('./dummyData.json', { flags: 'a' });
// import express from "express";
// import cors from "cors";
// import fetch from "node-fetch";

const port = process.env.PORT || 5000;
const app = express();

// Middlewares
app.use(
	cors({
		origin: '*',
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/airlines', airlinesRouter);
app.use('/airports', airportsRouter);

//Main route to serve and wrap data to be sent to fron-end
app.get('/', async (req, res) => {
	let { dep } = req.query;
	let { arr } = req.query;
	if (dep && arr) {
		const payload = await fetchData(dep, arr);
		//here is the response with the data used in front end
		// const dataToWrite = JSON.stringify(payload, null, 2);
		// stream.write(dataToWrite, (err) => {
		// 	if (err) {
		// 		console.log(err);
		// 	} else {
		// 		console.log('written');
		// 	}
		// });
		if (payload.length < 1) {
			res.status(404).json({
				success: true,
				message: 'It worked but could not find any flights',
				payload: dummyData,
			});
		} else {
			res.json({
				success: true,
				message: 'It worked , here are the available flights',
				payload: dummyData,
			});
		}
		return;
	}
	res.json({
		message: 'Search any flight by specifying departure(dep query) and arrival(arr query) ',
	});
});
//Initializing the server on port 5000 or process.env.PORT
app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
