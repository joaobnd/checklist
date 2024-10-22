const PROXY_CONFIG = {
  "/api": {
    "target": "http://localhost:3030",
    "secure": false,
    "changeOrigin": true,
    "logLevel": "debug",
    "pathRewrite": {
      "^/api": ""
    }
  }
};

module.exports = PROXY_CONFIG;
