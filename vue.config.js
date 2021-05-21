module.exports = {
  devServer: {
    proxy: "http://localhost:3000",
    host: "0.0.0.0",
    port: 8081,
  },
};
