const axios = require("axios");

export const Router = axios.create({
  baseURL: `https://oauth.reddit.com/api`,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer 984688359278-U13DJ1cbL_ANvWV4mqYj_s5tqhEdSg",
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
