import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

// before sending to server, adding headers to pass token etc...
instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
