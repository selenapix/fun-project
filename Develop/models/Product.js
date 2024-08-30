// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns 
    id: {
      type: DataTypes.INTEGER, //setting data type to integer
      allowNull: false,
      primaryKey: true, //setting as primary key
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING, //setting data type to string
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL, //setting data type to decimal 
      allowNull: false,
      validate: {
        isDecimal:true,
      },
    },
    stock: {
      type: DataTypes. INTEGER, //setting data type to integer
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    category_id: {
      type: DataTypes.INTEGER, //setting data type to integer 
      references: {
        model: "category", //referencing the 'category' table
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
