// import contentful from "contentful";

const contentful = require("contentful");
console.log(process.env.REACT_APP_API_SPACE);

export const Client = contentful.createClient({
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});
