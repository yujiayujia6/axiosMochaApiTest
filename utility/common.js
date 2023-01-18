const PropertiesReader = require("properties-reader");
const properties = PropertiesReader("config/env.properties");
const axios = require("axios");
const https = require("https");

const newAxiosInstance = async (token) => {
  const instance = axios.create({
    baseURL: properties.get("baseUrl"),
    timeout: 3000,
    headers: {
      "Content-type": "application/json",
      "API-Token": token,
    },
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  });
  return instance;
};
module.exports = {
  newAxiosInstance,
};
