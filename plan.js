const { application } = require("express");

// // when the user goes to the main home page, there will 2 app.gets, 1 for the initial search, the other for the specific search. ]
// the user will make a request to our server, our server then make a request to the application. the api will then return that to our server and our server will then that post back to the user.

// app.get - async function to get the data from the API, store this information into a variable using an await. We then need to map over the object, retrive the departure information and render this to the user. post that back as justifyContent:

// Scripts with tables.
//App.get for specific search - time/distance
// Update env.
// change csv files to mysql
// deploy.
//change dep and arr
//models that searches database for an airport and returns all data for that airport
