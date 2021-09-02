import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "https://api.bbboy.top",
    timeout: 10000,
  });

  // 请求拦截
  instance.interceptors.request.use(
    (config) => {
      // 如果有一些接口需要认证才可以访问，就在这统一设置
      const token = window.localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = "Bearer " + token;
      }

      return config;
    },
    (err) => {}
  );

  // 响应拦截
  instance.interceptors.response.use(
    (res) => {
      return res.data ? res.data.data : res;
    },
    (err) => {
      return err;
    }
  );

  return instance(config);
}
