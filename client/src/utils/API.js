require('dotenv').config();
const key = process.env.API_KEY;

// This will export our two API queries.
export const mainApiSearch = (query) => {
  return fetch(`https://tf689y3hbj.execute-api.us-east-1.amazonaws.com/prod/authorization/search?q=${query}&token=${key}`)
};

export const secondaryApiSearch = (query) => {
  return fetch(`https://tf689y3hbj.execute-api.us-east-1.amazonaws.com/prod/authorization/goals?q=${query}&token=${key}`)
};