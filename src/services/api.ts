import axios from 'axios';
import { History } from 'history';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
export function registerInterceptorsWithHistory(history: History): void {
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      const { response } = error;
      if (response?.status === 401) {
        // const redirectTo = response.data.need2fa ? '/login-2fa' : '/login';
        // history.push(redirectTo);
      }
      return Promise.reject(error);
    },
  );
}


export default api;
