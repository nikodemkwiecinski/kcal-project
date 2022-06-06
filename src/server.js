const PORT = 5500;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/", (request, response) => {
  response.json("Test connection");
});

app.get("/data", (request, response) => {
  const ingredients = request.query.ingredients;

  const params = {
    api_key: process.env.REACT_APP_API_KEY,
    query: ingredients,
    dataType: ["Survey (FNDDS)"],
    pageSize: 1,
  };

  const options = {
    method: "GET",
    url: `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${params.api_key}&query=${params.query}&dataType=${params.dataType}&pageSize=${params.pageSize}`,
  };

  axios
    .request(options)
    .then((res) => {
      response.json(res.data.foods);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
