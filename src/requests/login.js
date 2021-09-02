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
