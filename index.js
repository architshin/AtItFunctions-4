import functions from "@google-cloud/functions-framework";
import {jsonData} from "./data.js";

functions.http("helloHttp", (req, res) => {
  const responseData = {...jsonData, ...req.query};
  res.json(responseData);
});
