import { request } from "./base";

export function uploadNote(title, category, content, iconUrl, timeStamp) {
  return request({
    url: "/note",
    method: "post",
    data: {
      title,
      category,
      content,
      iconUrl,
      timeStamp,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
}
