import { request } from "./base";

export function getAllNote(num) {
  return request({
    url: "/api/notes",
    method: "get",
    params: {
      num,
    },
  });
}
