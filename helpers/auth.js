const { request } = require("express");

module.exports.checkAuth = function (request, response, next) {
  const userId = request.session.userId;

  if (!userId) {
    response.redirect("/");
  }
  next();
};
