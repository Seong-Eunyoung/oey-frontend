import axios from "axios";
const REST_API_BASE_URL = import.meta.env.VITE_API_URL;

const VITE_API_URL = `${REST_API_BASE_URL}/user`;

export const getUserId = (username) => {
    const token = localStorage.getItem('token');
    return axios.get(VITE_API_URL+'/'+username, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  };