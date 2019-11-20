const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy(["/api", , "/otherApi"], { target: "https://gifts-with-love.herokuapp.com" })
  );
};
