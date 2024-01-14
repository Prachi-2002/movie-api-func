// netlify/functions/proxy-omdb.js

const axios = require('axios');

exports.handler = async (event, context) => {
  try {
    const response = await axios.get(`http://www.omdbapi.com/?apiKey=ff24d901&s=batman&page=1`);
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
