// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', //foreign key in product model
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag, //the intermediate model
  foreignKey: 'product_id', //foreign key in the Product model
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id', //foreign key in the Tag model
});

// A Category has many Products
Category.hasMany(Product, {
  foreignKey: 'category_id', // The foreign key in the Product model
});

//Export models
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
