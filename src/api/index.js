import { Router, PostRouter } from "./config";

const api = {
  vote: (id, dir) => Router.post(`/vote?dir=${dir}&id=t3_${id}`),
  getPost: (postSlug) => PostRouter.get(`/${postSlug}.json`),
  getPosts: (postType, params) => PostRouter.get(`/${postType}.json`, { params })
};

export default api;
