require('dotenv').config();

// This will export our API query.
export const mainApiSearch = (query) => {
  return fetch(`https://agile-forest-55679.herokuapp.com/https://tf689y3hbj.execute-api.us-east-1.amazonaws.com/prod/authorization/search?q=${query}&token=${process.env.REACT_APP_KEY}`)
};

// This query is for future updates.
export const secondaryApiSearch = (query) => {
  return fetch(`https://tf689y3hbj.execute-api.us-east-1.amazonaws.com/prod/authorization/goals?q=${query}&token=${process.env.REACT_APP_KEY}`)
};