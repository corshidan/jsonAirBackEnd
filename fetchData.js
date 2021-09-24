const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const { getAirline } = require('./models/airlines.js');
const { getAirportData } = require('./models/airports.js');
async function fetchData(dep, arr) {
	const response = await fetch(
		`https://api.oag.com/flights/?DepartureAirport=${dep}&ArrivalAirport=${arr}&Limit=30`,
		{
			headers: {
				//   "Cache-Control": "no-cache",
				'Subscription-Key': process.env.API_KEY,
			},
		}
	);
	const { data } = await response.json();
	// console.log(data);
	//we pack only the data we use to send it to front-end
	const cleanData = data.map((item) => {
		return {
			carrierIataCode: item.carrierCode.iata,
			flightNumber: item.flightNumber,
			departureAirportIataCode: item.departure.airport.iata,
			departureTerminal: item.departure.terminal,
			departureTime: item.departure.passengerLocalTime,
			arrivalAirportIata: item.arrival.airport.iata,
			arrivaltime: item.arrival.passengerLocalTime,
			date: item.effectivePeriod.startDate,
		};
	});

	//talk to database here

	for (let i = 0; i < cleanData.length; i++) {
		const { carr_name } = await getAirline(cleanData[i].carrierIataCode);
		const departureAirport = await getAirportData(cleanData[i].departureAirportIataCode);
		const arrivalAirport = await getAirportData(cleanData[i].arrivalAirportIata);
		cleanData[i].name = carr_name;
		cleanData[i].departureAirport = departureAirport;
		cleanData[i].arrivalAirport = arrivalAirport;
	}
	cleanData.sort((a, b) => {
		return new Date(a.date) - new Date(b.date);
	});
	const today = Date.now();
	const result = cleanData.filter((item) => {
		return Date.parse(new Date(item.date)) > today;
	});
	return result;
}

module.exports = { fetchData };
