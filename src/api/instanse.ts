import axios from "axios";

const instance = axios.create({
  baseURL: "https://tandilyans-server.vercel.app/api/", 
});

instance.interceptors.request.use((config: any) => {
  // const lang = localStorage.getItem("lang") || "am";

  config.headers = {
    // "Accept-Language": lang,
    ...(config.headers || {}),
  };

  return config;
});

export default instance;