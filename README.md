Overview
The Weather Information Service is a simple web service that fetches and displays current weather information for any city or location specified by the user. 
This service utilizes the Weatherstack API to retrieve weather data and presents it in a user-friendly JSON format.

Features

* City-based Weather Lookup: Enter a city name to get the current weather data, including temperature, humidity, wind speed, and weather descriptions.
* API Integration: The service fetches real-time weather data from the Weatherstack API.
* Error Handling: Provides appropriate messages when the user inputs an invalid city or the API key is incorrect.

Technologies Used

* Node.js: JavaScript runtime used to build the server.
* Express.js: Web framework for Node.js to handle HTTP requests.
* Axios: Promise-based HTTP client for making API requests.
* Dotenv: A module to load environment variables from a .env file.
* Weatherstack API: External API used to fetch weather data.

Now, let us know briefly about this project.

* Node.js installed on my machine.   
* A Weatherstack API key. Sign up for free.
* Installation ->
        1. Clone the repository
        2. Install dependencies
        3. Set up environment variables
* Running the Service -> To access the service -->  Open your web browser and navigate to "http://localhost:3000/" and
   To fetch weather information for a specific city, go to "http://localhost:3000/weather?city={city_name}"

Project Structure:     


weather-info-service/

├── index.js                # Main application file

├── package.json            # Node.js dependencies and scripts

├── .env                    # Environment variables (not included in GitHub)

├── .gitignore              # Files and directories to be ignored by git

└── README.md               # Project documentation (this file)
