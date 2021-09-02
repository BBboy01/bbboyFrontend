import { request } from "./base";

export function uploadNote(title, category, content, iconUrl) {
  return request({
    url: "/note",
    method: "post",
    data: {
      title,
      category,
      content,
      iconUrl,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
}
