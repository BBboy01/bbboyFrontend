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

export function getSingleNote(id = 1) {
  return request({
    url: `/api/note/${id}`,
    method: "get",
  });
}

export function getCategories() {
  return request({
    url: "/api/categories",
    method: "get",
  });
}
