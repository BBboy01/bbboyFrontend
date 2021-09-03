const mutations = {
  setIsLogin(state, payload) {
    state.user.isLogin = payload;
  },
  setUserInfo(state, payload) {
    state.user.username = payload;
  },
};

export default mutations;
