const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const User = require("./User");
const Publication = require("./Publication");

const Comments = db.define("comments", {
  comments: {
    type: DataTypes.STRING,
    require: true,
    allowNull:false
  },
});

User.belongsToMany(Publication, { through: "comments" });
Publication.belongsToMany(User, { through: "comments" });

module.exports = Comments;
