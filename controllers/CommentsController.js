const Comments = require("../models/Comments");

module.exports = class CommentsController {
    static async comments(request, response) {
        const { comments } = request.body

        const com = {
            comments,
        }

        try {
            const creatComment = Comments.create(com)
            request.session.userId = creatComment.id
            request.flash("message", "Comentario feito com sucesso!")

            request.session.save(() => {
                response.redirect("/");
            });
            return;
        } catch (error) {
            console.log(error)
        }
    }
}