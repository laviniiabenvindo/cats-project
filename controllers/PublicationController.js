const Publication = require("../models/Publication");

module.exports = class PublicationController {
  static async showPublication(request, response) {
    try {
      const publication = await Publication.findAll({ raw: true });

      response.render("home", {publication});
    } catch (error) {
      console.log(error);
    }
  }
};
