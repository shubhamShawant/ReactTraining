import axios from "axios";

//interceptor
axios.interceptors.request.use((config) => {
  config.headers["app-id"] = "6269176ae4a26e7197fea0d2";
  return config;
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};

//   axios.get
//   axios.post
//   axios.put
//   axios.patch
//   axios.delete
