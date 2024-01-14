const axios = require('axios');

exports.handler = async (val = "batman", page = 1) => {
  try {
    const response = await axios.get(`http://www.omdbapi.com/?apiKey=ff24d901&s=${val}&page=${page}`);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
