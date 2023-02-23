import axios from "axios";

export const getBinanceData = () => axios.get("https://data.binance.com/api/v3/ticker/24hr");
export const getEstimatedAge = (name: string) => axios.get(`https://api.agify.io?name=${name}`);
export const getPublicIp = () => axios.get(`https://api.ipify.org/?format=json`);
