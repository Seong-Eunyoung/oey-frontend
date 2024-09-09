import axios from "axios";
const REST_API_BASE_URL = import.meta.env.VITE_API_URL;

const VITE_API_URL = `${REST_API_BASE_URL}/wish`;

export const submitWish = (wish) => {
    const token = localStorage.getItem('token');
    console.log(wish);
    return axios.post(VITE_API_URL, wish,{
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // JWT 토큰을 헤더에 추가
      },
    });
  };

export const getWishList = () => {
  const token = localStorage.getItem('token');
  return axios.get(VITE_API_URL, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // JWT 토큰을 헤더에 추가
    },
  });
};