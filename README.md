This restful API back-end server is designed to access information from the OAG flight API and utilise that data to provide information to our users regarding upcoming flight information.
This information is rendered on the Get Me There webpage and is displayed using a React front-end.
The dependencies required to create this server includes: express, node, postgres, nodemon, fetch and cors.

## App.js

The server was established using Express version 4.17.1. It includes CORS to allow the front-end to access our back-end database to permit the loading of resources.
It features express.json middleware to parse the information received from the API into a string.
There is also middleware for URL encoding which converts characters into a format that can be transmitted over the internet.

There are two routers which are designed to offer CRUD functionality, these are further explored under the routes folder.

There is a main route specified which handles a GET request made to the homepage. This app.get is an async function which destructures the departure and arrival destinations from the query made by the user request.

If the user has entered a departure and arrival then the information is fed to our fetch data function as an argument and the result is stored into a variable. A response is sent to the user containing their results, along with a confirmation message.
If the user has not entered the above details, then a response is sent requesting these details are entered.
Finally, we have an app.listen established on our port which serves a console log when the server is switched on.

## The fetch data function

The fetch data function utilises the node-fetch dependency and this will need to be downloaded before this server can run. Please click on this link for docs on node-fetch: https://www.npmjs.com/package/node-fetch

The node-fetch requirements are specified at the top of our fetch database.
It also imports the models which we use to take action on the data being received from the API or the user.
The function itself is a async function which calls the OAG API and stores this into a variable. It includes a header which contains our private subscription key to access the OAG API. This access key has been stored securely within our .env file, meaning it is not displayed to the user or anywhere on our front-end.
The API returns a block of text containing nested objects arrays. We remove the json objects from this data and store it into a variable called data.
We do not require all of the information sent by the OAG API and to retrieve the necessary information we want to display in our front-end, we are required to utilise an array.map method to map through the information and return our specified parameters. The specified parameters are stored in a variable called cleanData.
In order to communicate and add to our postgres database, we incorporated a for loop which iterates through the data. This also removes the carrier name, departureAirport and arrivalAirport and uses this information as an argument for our models. The models then updates the database using this information.
The information supplied by the API is unordered and we wish to display our results to the user in date order. In order to achieve this, we are required to use a .sortMethod to filter the results and we also used a Date.now/.filter to produce date ordered results.

## Models

The models are functions which allows our server to interact with our postgres database.
It also ensures that our API is fully restful.
There are two separate models: one each for airports and airlines.
Each model folder containes four async functions which allows us to create, read, update and delete enteries from our database depending on the user input.

## Routes

The routes handles the requests made by the user.
There are two routes files: one each for the airports and airlines.
These routes files meet the restful API requirements and sends the request made by the user to the location they have specified.
The OAG API data is supplied by OAG in capitals and the information in our database is also stored in the same format. This means that the user needs to input the details in capitals for it to be understood by our database.
To avoid any errors and allow for ease of input of information for our users, we have incorporated a .touppercase method in our database to carry out this action automatically.

## Postgres scripts

The database that we are using to store the API information is postgres.
In order to create, populate and delete a postgres table, we have created a set of scripts to complete these actions on our behalf.
These scripts have been included in the package.json, allowing the back-end developer to run these scripts with minimal efforts.

## All data

The information supplied by the API was provided in a CSV format.
We have used an online CSV to json converter to render information that can be read by our postgres database.
This information is now stored in json form under the all_data folder.
