import { createStore } from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = {
  user: {
    isLogin: window.localStorage.getItem("token") ? true : false,
    username: window.localStorage.getItem("username")
      ? window.localStorage.getItem("username")
      : "",
  },
};

export default createStore({
  state,
  mutations,
  actions,
  getters,
});
