const axios = require("axios");
// const token = process.env.REACT_APP_REDDIT_BEARER_TOKEN;

export const Router = axios.create({
  baseURL: `https://oauth.reddit.com/api`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer 984688359278-t6BHYr2eburNG7rFHcwUdubwoTW5JQ`,
    accept: "application/json",
  },
});

export const PostRouter = axios.create({
  baseURL: `https://www.reddit.com/r/holdmybeer`,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});
