import { request } from "./base";

export function getAllNote() {
  return request({
    url: "/note",
    method: "get",
  });
}

export function getSingleNote(id = 1) {
  return request({
    url: `/note/${id}`,
    method: "get",
  });
}

export function getCategories() {
  return request({
    url: "/categories",
    method: "get",
  });
}
