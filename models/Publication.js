const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const Publication = db.define("publication", {
  publication: {
    type: DataTypes.STRING,
    require: true,
    allowNull: false,
  },
});

module.exports = Publication;
