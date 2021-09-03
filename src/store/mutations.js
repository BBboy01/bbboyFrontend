const mutations = {
  setIsLogin(state, payload) {
    state.user.isLogin = payload;
  },
  setUserInfo(state, payload) {
    state.user.username = payload;
  },
  removeUserInfo(state) {
    state.user.isLogin = false;
    state.user.username = "";
  },
};

export default mutations;
