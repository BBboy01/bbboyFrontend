import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "https://api.bbboy.top",
    timeout: 5000,
  });

  // 响应拦截
  instance.interceptors.response.use(
    (res) => {
      return res.data ? res.data : res;
    },
    (err) => {}
  );

  return instance(config);
}
