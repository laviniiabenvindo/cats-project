const User = require("../models/User");

const bcrypt = require("bcryptjs");

module.exports = class AuthController {
  static async registerPost(request, response) {
    const { nome, email, password, confirmPassword } = request.body;

    // Verificar as senhas
    if (password != confirmPassword) {
      request.flash("message", "As senhas não conferem, tente novamente");
      response.redirect("/");
      return;
    }

    // Verificar se existe Usuario
    const emailExist = await User.findOne({ where: { email: email } });
    if (emailExist) {
      request.flash("message", "Email já está em uso!");
      response.render("home");
      return;
    }

    //Segurança da senha
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = {
      nome,
      email,
      password: hashedPassword,
    };

    try {
      const createdUser = await User.create(user);
      request.session.userId = createdUser.id;
      request.flash("message", "Cadastro realizado com sucesso!");

      request.session.save(() => {
        response.redirect("/");
      });
      return;
    } catch (error) {
      console.log(error);
      return;
    }
  }
  static async loginPost(request, response) {
    const { email, password } = request.body;

    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      request.flash("message", "Usuário não encontrado!");
      response.render("home");
      return;
    }

    const passwordMatch = bcrypt.compareSync(password, user.password)

    // Varifica se a senha é valida
    if(!passwordMatch) {
      request.flash("message", "Senha inválida!");
      response.render("home");
      return;
    }

    request.session.userId = user.id;

    request.flash("message", "Usuário autenticado com sucesso!");

    request.session.save(()=>{
      response.redirect("/")
    })
  }
  static async logout(request, response) {
    request.session.destroy();
    response.redirect("/")
  }
};
