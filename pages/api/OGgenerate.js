import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const requestData = req.body;

  if (!requestData) {
    res.status(400).json({
      error: {
        message: "Invalid request data",
      }
    });
    return;
  }

  const itinerary = generateItinerary(requestData);

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Here is your flight itinerary:\n\n${itinerary}`,
      temperature: 0.6,
      max_tokens: 3800,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generateItinerary(requestData) {
  const { fullName, email, gender, flightType, departDate, returnDate, oneWayDate, numFlights, multiCityDates, originAirport, destinationAirport, selectedAirports, budget, airline, flightClass, seat } = requestData;

  const price = budget ? Math.floor(Math.random() * parseInt(budget, 10)) : '';

  let itinerary = '';

  // Add passenger information
  itinerary += `Passenger Information:\n`;
  itinerary += `Full Name: ${fullName || 'N/A'}\n`;
  itinerary += `Email: ${email || 'N/A'}\n`;
  itinerary += `Gender: ${gender || 'N/A'}\n\n`;

  // Add flight information
  itinerary += `Flight Information:\n`;
  itinerary += `Flight Type: ${flightType || 'N/A'}\n`;

  if (flightType === 'Round-Trip') {
    itinerary += `Departure Date: ${departDate || 'N/A'}\n`;
    itinerary += `Return Date: ${returnDate || 'N/A'}\n`;
    itinerary += `Origin Airport: ${originAirport || 'N/A'}\n`;
    itinerary += `Destination Airport: ${destinationAirport || 'N/A'}\n`;
  } else if (flightType === 'One-Way') {
    itinerary += `One Way Date: ${oneWayDate || 'N/A'}\n`;
    itinerary += `Origin Airport: ${originAirport || 'N/A'}\n`;
    itinerary += `Destination Airport: ${destinationAirport || 'N/A'}\n`;
  } else if (flightType === 'Multi-City') {
    itinerary += `Number of Flights: ${numFlights || 'N/A'}\n`;
    itinerary += `Multi-City Dates: ${multiCityDates ? multiCityDates.join(', ') : 'N/A'}\n`;
  }

  itinerary += `Selected Airports: ${selectedAirports ? selectedAirports.join(', ') : 'N/A'}\n`;
  itinerary += `Budget: ${budget ? `$${price}` : 'N/A'}\n`;
  itinerary += `Airline: ${airline || 'N/A'}\n`;
  itinerary += `Flight Class: ${flightClass || 'N/A'}\n`;
  itinerary += `Seat: ${seat || 'N/A'}\n\n`;

  return itinerary;
}
