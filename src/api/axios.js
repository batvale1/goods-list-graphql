import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_AXIOS_BASE_URL,
});

export default {
  post: async (path, payload) => axiosInstance.post(path, payload),
};
