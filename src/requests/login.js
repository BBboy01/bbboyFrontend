import { request } from "./base";

export function login(username, password) {
  return request({
    url: "/auth",
    method: "POST",
    data: { username, password },
    validateStatus: function(status) {
      return status >= 200 && status <= 401;
    },
  });
}

export function checkStatus() {
  const token = window.localStorage.getItem("token");
  const headers = "Bearer " + token;

  return request({
    url: "/auth",
    method: "GET",
    headers: {
      Authorization: headers,
    },
    validateStatus: function(status) {
      return status >= 200 && status <= 401;
    },
  });
}
