const Comments = require("../models/Comments");

module.exports = class CommentsController {
  static async comments(request, response) {
    const { comments } = request.body;
    const publicationId = request.body.publicationId;
    const userId = request.session.userId;

    const com = {
      comments,
      userId: userId,
      publicationId: publicationId,
    };

    try {
      const creatComment = Comments.create(com);
      request.session.userId = creatComment.id;
      request.flash("message", "Comentario feito com sucesso!");

      request.session.save(() => {
        response.redirect("/");
      });
      return;
    } catch (error) {
      console.log(error);
    }
  }
};
