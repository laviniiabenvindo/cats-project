const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const User = require("./User");
const Publication = require("./Publication");

const Likes = db.define("likes", {});

User.belongsToMany(Publication, { through: "likes" });
Publication.belongsToMany(User, { through: "likes" });

module.exports = Likes;
