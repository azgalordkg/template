import axios from "axios";

const mainURL = process.env.MAIN_URL;
const baseURL: string = mainURL + "/api/v1";

const instance = axios.create({ baseURL });

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject({
      ...error,
    });
  }
);

export default instance;
