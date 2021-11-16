import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from "axios";

export const TESTNET_API = "http://127.0.0.1:3000";

const ACCESS_TOKEN = "ACCESS_TOKEN";
const API_SECRET = "API_SECRET";

export const requestAPI = (): AxiosInstance => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    "X-Henesis-Secret": API_SECRET,
  };
  const configs: AxiosRequestConfig = {
    headers,
  };

  const client = axios.create({
    baseURL: TESTNET_API,
    ...configs,
  });

  return client;
};

const getCoins = async () => {
  const response = await requestAPI().get(`/api/v3/ethereum/coins`);
  console.log(response.data);
};

getCoins();
