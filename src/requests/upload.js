import { request } from "./base";

export function uploadNote(data) {
  return request({
    url: "/api/note/add",
    method: "post",
    data: {
      content: data,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
}
