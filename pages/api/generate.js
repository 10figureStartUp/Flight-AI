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
      },
    });
    return;
  }

  const requestData = req.body;

  if (!requestData) {
    res.status(400).json({
      error: {
        message: "Invalid request data",
      },
    });
    return;
  }

  const {
    fullName,
    email,
    flightType,
    departDate,
    returnDate,
    oneWayDate,
    numFlights,
    multiCityDates,
    originAirport,
    destinationAirport,
    selectedAirports,
    budget,
    airline,
    flightClass,
    seat,
  } = requestData;

  const inputPromptParts = [
    "Generate flight itinerary details for the following information:\n",
  ];

  if (fullName) inputPromptParts.push(`Full Name: ${fullName}\n`);
  if (email) inputPromptParts.push(`Email: ${email}\n`);
  if (flightType) inputPromptParts.push(`Flight Type: ${flightType}\n`);
  if (departDate) inputPromptParts.push(`Departure Date: ${departDate}\n`);
  if (returnDate) inputPromptParts.push(`Return Date: ${returnDate}\n`);
  if (oneWayDate) inputPromptParts.push(`One Way Date: ${oneWayDate}\n`);
  if (numFlights) inputPromptParts.push(`Number of Flights: ${numFlights}\n`);
  if (multiCityDates) inputPromptParts.push(`Multi-City Dates: ${multiCityDates.join(",")}\n`);
  if (originAirport) inputPromptParts.push(`Origin Airport: ${originAirport}\n`);
  if (destinationAirport) inputPromptParts.push(`Destination Airport: ${destinationAirport}\n`);
  if (selectedAirports) inputPromptParts.push(`Selected Airports: ${selectedAirports.join(", ")}\n`);
  if (airline) inputPromptParts.push(`Airline: ${airline}\n`);
  if (flightClass) inputPromptParts.push(`Flight Class: ${flightClass}\n`);
  if (seat) inputPromptParts.push(`Seat: ${seat}\n`);

  inputPromptParts.push(
    "\nGenerate a realistic flight itinerary including price (within budget), confirmation number, boarding time, take-off time, landing time, and random seat (if necessary), airline (if necessary), and flight class (if necessary)."
  );

  const inputPrompt = inputPromptParts.join("");

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: inputPrompt,
      temperature: 0.3,
      max_tokens: 3800,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
}
