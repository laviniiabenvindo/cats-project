const Likes = require("../models/Likes");

module.exports = class LikesController {
  static async likePost(request, response) {
    const publicationId = request.body.publicationId;
    const userId = request.session.userId;

    const like = {
      userId: userId,
      publicationId: publicationId,
    };

    try {
      await Likes.create(like);
      response.redirect("/");
    } catch (error) {
      console.log(error);
    }
  }
};
